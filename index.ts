import type { WsData } from "./types/core";
import { controllers } from "./controllers/controllers";
import { wsControllers } from "./controllers/ws";

//ORIGIN HOST
const host:string = 'https://frensgo.lat';
// const host: string = "http://localhost:5173";

//STATIC FOLDER
const staticFolder = "./build";

//ANTISPAM SYSTEM
let bloqueds: Map<string | undefined, number> = new Map();
function antispam(): (ws: any) => void {
  let spamCount: number = 3;
  let lastTime: number = 0;
  let ticksToBan: number = 3;
  return (ws: any) => {
    if (Date.now() / 1000 - lastTime > 3) spamCount = 5;
    spamCount--;
    if (spamCount <= 0) {
      ticksToBan--;
      if (ticksToBan == 3) ws.send(JSON.stringify({ type: "CALM" }));
      if (ticksToBan == 2) ws.send(JSON.stringify({ type: "CALM" }));
      if (ticksToBan == 1) ws.send(JSON.stringify({ type: "CALM" }));
      if (ticksToBan <= 0) {
        bloqueds.set(ws.remoteAddress, Date.now());
        ws.close();
      }
    }
    lastTime = Math.round(Date.now() / 1000);
  };
}

//SERVER CHAT
const server = Bun.serve<WsData>({
  port: 3000,
  async fetch(req, server) {
    const origin = req.headers.get("origin");
    //ARTESANAL CORS
    const cors: ResponseInit = {
      headers: {
        "Access-Control-Allow-Origin": host,
      },
    };
    if (origin && origin !== host) return new Response(null, { status: 500 });
    const ip = server.requestIP(req)?.address;
    if (bloqueds.has(ip))
      return new Response("Upgrade failed", { status: 500 });
    const url = new URL(req.url);
    // MAIN SWITCHER
    switch (url.pathname) {
      case "/chat":
        if (
          server.upgrade<WsData>(req, {
            data: {
              nick: url.searchParams.get("nick"),
              room: url.searchParams.get("room"),
              avatar: url.searchParams.get('avatar'),
              id: Date.now(),
              as: antispam(),
            },
          })
        ) {
          return; // do not return a Response
        }
        return new Response("Upgrade failed", { status: 500 });
      case "/":
        return controllers.root();
      case "/audio" :
        return controllers.audio(req, cors);
      case "/upImg":
        return controllers.upImg(req, cors);
      case '/getRooms' :
        return wsControllers.rooms(cors);
      default:
        const filepath = staticFolder + url.pathname;
        const file = Bun.file(filepath);
        return new Response(file);
    }
  },
  websocket: {
    open(ws) {
      wsControllers.open(ws, server);
    },
    message(ws, message: string) {
      wsControllers.message(ws, server, message);
    },
    close(ws) {
      wsControllers.close(ws, server);
    },
  },
  error() {
    return new Response(null, { status: 404 });
  },
});

console.log("Servidor corriendo en el puerto 3000");
