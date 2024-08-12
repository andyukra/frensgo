import { Role } from "../types/core";
import type { User, Room } from "../types/core";
//LIST OF USERNAMES
let usernames:Map<string, string> = new Map<string, string>();

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
            body: msg.trim(),
            type: 'image'
          }
        }));
    }
  }

export const wsControllers = {
    open(ws:any, server:any) {
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
    message(ws:any, server:any, message:string) {
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
    rooms(cors:ResponseInit) {
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