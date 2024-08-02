import { Role } from "./types/core";
import type { User, WsData } from "./types/core";

//ORIGIN HOST
const host = 'https://frensgo.lat';

//LIST OF USERNAMES
let usernames = new Map<string, string>();

//STATIC FOLDER
const staticFolder = "./build";

//WS MAIN SWITCHER
function switcher(
  ev: string,
  sock: any,
  room: string | undefined,
  sv: any | undefined,
  msg: any | undefined
): void {
  switch (ev) {
    case "GETUSERLIST":
      sock.send(
        JSON.stringify({
          type: "USERLIST",
          msg: Array.from(rooms.get(room!)!),
        })
      );
      break;
    case "ROOM_MSG":
      if (!msg || msg.length > 120 || msg.length === 0) return;
      sv.publish(
        room,
        JSON.stringify({
          type: "ROOM_MSG",
          msg: {
            username: sock.data.nick,
            body: msg.trim(),
          },
        })
      );
  }
}

//ROOMS
let rooms = new Map<string, Map<number, User>>([
  ["amigos1", new Map<number, User>()],
  ["amigos", new Map<number, User>()],
  ["amor1", new Map<number, User>()],
  ["amor2", new Map<number, User>()],
  ["argentina", new Map<number, User>()],
  ["mexico", new Map<number, User>()],
  ["peru", new Map<number, User>()],
  ["venezuela", new Map<number, User>()],
]);

//ANTISPAM SYSTEM
let bloqueds: Map<string | undefined, number> = new Map();
function antispam(): (ws: any) => void {
  let spamCount: number = 4;
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
      const origin = req.headers.get('origin');
      if(origin && origin !== host) return new Response(null, { status: 500 });
      const ip = server.requestIP(req)?.address;
      if (bloqueds.has(ip)) return new Response("Upgrade failed", { status: 500 });
      const url = new URL(req.url);
      // upgrade the request to a WebSocket
      if (url.pathname === "/chat") {
          if (
              server.upgrade(req, {
                  data: {
                    nick: url.searchParams.get("nick"),
                    room: url.searchParams.get("room"),
                    id: Date.now(),
                    as: antispam(),
                },
            })
        ) {
            return; // do not return a Response
      }
      return new Response("Upgrade failed", { status: 500 });
    } else if(url.pathname === '/') {
        console.log(origin)
        const file = Bun.file(staticFolder + '/index.html')
        return new Response(file);
    } else {
        const filepath = staticFolder + url.pathname;
        const file = Bun.file(filepath);
        return new Response(file);
    }
  },
  websocket: {
    open(ws) {
      let { nick, room, id } = ws.data;
      if (!nick || !room || !ws.remoteAddress || !id) return;
      if (!rooms.has(room)) return;
      if (decodeURI(nick).length > 25) return;
      //UNIQUE NICK
      if (usernames.has(nick.toUpperCase())) {
        nick = `${nick}${Math.floor(Math.random() * 1000)}`;
        usernames.set(nick.toUpperCase(), ws.remoteAddress);
        //SAVED NEW NICK
        ws.data.nick = nick;
      } else {
        usernames.set(nick.toUpperCase(), ws.remoteAddress);
      }
      const user = {
        username: nick,
        role: Role.GUEST,
      };
      //UPDATE ROOM WITH NEW USER
      rooms.set(room, rooms.get(room)!.set(id, user));
      //ENTER TO ROOM
      ws.subscribe(room);
      //CONNECT SOCKET
      ws.send(
        JSON.stringify({
          type: "CONNECTED",
        })
      );
      //SEND EVENTS TO ALL USERS OF ROOM
      server.publish(
        room,
        JSON.stringify({
          type: "NEW_USER",
          msg: `${nick} ha entrado a la sala`,
        })
      );
      server.publish(
        room,
        JSON.stringify({
          type: "USERLIST",
          msg: Array.from(rooms.get(room)!),
        })
      );
      console.log(nick, "Se ha conectado a esta sala : ", room);
    },
    message(ws, message: string) {
      //@ts-ignore
      ws.data.as(ws);
      const { type, msg } = JSON.parse(message);
      switcher(type, ws, ws.data.room, server, msg);
    },
    close(ws) {
      let { nick, room, id } = ws.data;
      if (!nick || !room) return;
      server.publish(
        room,
        JSON.stringify({
          type: "BYE_USER",
          msg: `${nick} se ha desconectado`,
        })
      );
      ws.unsubscribe(room);
      usernames.delete(nick.toUpperCase());
      //UPDATE ROOM LIST
      let rm = rooms.get(room)!;
      rm!.delete(id);
      rooms.set(room, rm);
      server.publish(
        room,
        JSON.stringify({
          type: "USERLIST",
          msg: Array.from(rooms.get(room)!),
        })
      );
      console.log("Se ha desconectado el usuario : ", nick);
    },
  },
  error() {
    return new Response(null, { status: 404 });
  },
});

console.log("Servidor corriendo en el puerto 3000");
