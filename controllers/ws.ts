import type { User, Room } from "../types/core";
//LIST OF USERNAMES
let usernames:Map<string, string> = new Map<string, string>();
//LIST BANNED
let bloqueds: Map<string|undefined, number> = new Map();

//ROOMS
let rooms = new Map<string, Map<number, User>>([
    ["amigos1", new Map<number, User>()],
    ["amigos2", new Map<number, User>()],
    ["amor1", new Map<number, User>()],
    ["amor2", new Map<number, User>()],
    ["argentina", new Map<number, User>()],
    ["mexico", new Map<number, User>()],
    ["peru", new Map<number, User>()],
    ["venezuela", new Map<number, User>()],
  ]);

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
              avatar: sock.data.avatar,
              body: msg.trim(),
            },
          })
        );break;
      case 'AUDIO':
        if(!msg) return;
        sv.publish(room, JSON.stringify({
          type: 'AUDIO',
          msg: {
            username: sock.data.nick,
            avatar: sock.data.avatar,
            body: msg.trim(),
            type: 'audio'
          }
        }));break;
      case 'IMG':
        if(!msg) return;
        sv.publish(room, JSON.stringify({
          type: 'IMG',
          msg: {
            username: sock.data.nick,
            avatar: sock.data.avatar,
            body: msg.trim(),
            type: 'image'
          }
        }));break;
      case 'STICKER':
        if(!msg) return;
        sv.publish(room, JSON.stringify({
          type: 'STICKER',
          msg: {
            username: sock.data.nick,
            avatar: sock.data.avatar,
            body: msg.trim(),
            type: 'STICKER'
          }
        }));
        break;
      case 'OPEN_PV':
        if(!msg) return;
          rooms.get(room!)?.get(msg.to)?.ws.send(JSON.stringify({
            type: "OPEN_PV",
            msg: { me: msg.to, nick: sock.data.nick, from: sock.data.id, avatar: sock.data.avatar }
          }));
          break
      case 'PV':
        if(!msg) return;
          rooms.get(room!)?.get(msg.to)?.ws.send(JSON.stringify({
            type: "PV",
            msg: { fromId: sock.data.id, fromNick: sock.data.nick, body: msg.body, fromAvatar: sock.data.avatar }
          }));
          break;
      case 'CLOSE_PV':
        if(!msg) return;
          rooms.get(room!)?.get(msg.to)?.ws.send(JSON.stringify({
            type: "CLOSE_PV",
            msg: { from: sock.data.id, nick: sock.data.nick, to: msg.to, avatar: sock.data.avatar }
          }));
          break;
        case 'WHISP':
          if(!msg) return;
          rooms.get(room!)?.get(msg.to)?.ws.send(JSON.stringify({
            type: "WHISP",
            msg: { from: sock.data.id, username: sock.data.nick, avatar: sock.data.avatar, body: msg.body }
          }));
          break;
        case 'BAN':
          if(!msg) return;
          const username = msg.username.toUpperCase();
          if(!usernames.has(username)) return;
          const ip = usernames.get(username);
          bloqueds.set(ip, Date.now());
          rooms.get(room!)?.get(msg.id)?.ws.send(JSON.stringify({
            type: "BANNED"
          }));
    }
}

//ANTISPAM 2 OPEN AND CLOSE SOCKETS
let lock:boolean = false;

export const wsControllers = {
    open(ws:any, server:any) {
      //FILTER BANNEDS
      if(bloqueds.has(ws.remoteAddress)) return;
      // ANTISPAM 2
      if(lock) return;
      lock = true;
      setInterval(()=>lock = false, 5000);
      //MAIN CODE
      let { nick, room, id, avatar } = ws.data;
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
      const user:User = {
        username: nick,
        role: ws.data.role,
        ws: ws,
        avatar: avatar
      };
      //UPDATE ROOM WITH NEW USER
      rooms.set(room, rooms.get(room)!.set(id, user));
      //ENTER TO ROOM
      ws.subscribe(room);
      //CONNECT SOCKET
      ws.send(
        JSON.stringify({
          type: "CONNECTED",
          id: ws.data.id
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
      //CONSOLE LOG
      console.log(nick, "Se ha conectado a esta sala : ", room);
    },
    message(ws:any, server:any, message:string) {
      if(bloqueds.has(ws.remoteAddress)) return;
      ws.data.as(ws);
      const { type, msg } = JSON.parse(message);
      switcher(type, ws, ws.data.room, server, msg);
    },
    close(ws:any, server:any) {
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
      let rm = rooms.get(room);
      try {
        rm!.delete(id);
      } catch (error) {
        
      }
      rooms.set(room, rm!);
      server.publish(
        room,
        JSON.stringify({
          type: "USERLIST",
          msg: Array.from(rooms.get(room)!),
        })
      );
      console.log("Se ha desconectado el usuario : ", nick);
    },
    //SEND ROOMS INFO TO FRONTEND
    rooms(ip:string|undefined, cors:ResponseInit) {
      if(bloqueds.has(ip)) return new Response(null, {...cors, status: 500});
      const resp:Array<Room> = [];
      rooms.forEach((v,k) => {
        const obj:Room = {
          name: k,
          value: k,
          maxUsers: 50,
          connectedUsers: v.size
        };
        resp.push(obj);
      });
      return new Response(JSON.stringify(resp), cors);
    }
}