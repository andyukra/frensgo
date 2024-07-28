import { Elysia } from 'elysia';
import { Role } from './types/core';
import type { User } from './types/core';
import { staticPlugin } from '@elysiajs/static';

//LIST OF USERNAMES
let usernames = new Map<string, string>();

//WS MAIN SWITCHER
function switcher(ev:string, sock:any, room:string|undefined, sv:any|undefined, msg:any|undefined):void {
    switch(ev) {
        case 'GETUSERLIST':
            sock.send({
                type: 'USERLIST',
                msg: Array.from(rooms.get(room!)!)
            });break;
        case 'ROOM_MSG':
            if(!msg || msg.length > 120 || msg.length === 0) return;
            sv!.publish(room, JSON.stringify({
                type: 'ROOM_MSG',
                msg: {
                    username: sock.data.params.nick,
                    body: msg.trim()
                }
            }));
    }
}

//ROOMS
let rooms = new Map([
    ['amigos1', new Map<string, User>()],
    ['amigos', new Map<string, User>()],
    ['amor1', new Map<string, User>()],
    ['amor2', new Map<string, User>()],
    ['argentina', new Map<string, User>()],
    ['mexico', new Map<string, User>()],
    ['peru', new Map<string, User>()],
    ['venezuela', new Map<string, User>()],
]);

//SERVER CHAT
const app = new Elysia({
    websocket: {
        idleTimeout: 960
    }
})
    .use(staticPlugin({
        assets: `${__dirname}/build`,
        prefix: '/'
    }))
    .ws('/ws/:room/:nick',{
        open(ws) {       
            let { data: { params: {nick, room} } } = ws;
            if( !nick || !room || !ws.remoteAddress || !ws.id) return;
            if(!rooms.has(room)) return;
            if(decodeURI(nick).length > 25) return;
            //UNIQUE NICK
            if(usernames.has(nick.toUpperCase())) {
                nick = `${nick}${Math.floor(Math.random()*1000)}`;
                usernames.set(nick.toUpperCase(), ws.remoteAddress);
                //SAVED NEW NICK
                ws.data.params.nick = nick;
            } else {
                usernames.set(nick.toUpperCase(), ws.remoteAddress);
            }
            const user = {
                username: nick,
                role: Role.GUEST,
            }
            //UPDATE ROOM WITH NEW USER
            rooms.set(room, rooms.get(room)!.set(ws.id, user));
            //ENTER TO ROOM
            ws.subscribe(room);
            //CONNECT SOCKET
            ws.send({
                type: 'CONNECTED'
            });
            //SEND EVENTS TO ALL USERS OF ROOM
            app.server!.publish(room, JSON.stringify({
                type: 'NEW_USER',
                msg: `${nick} ha entrado a la sala`,
            }));
            app.server!.publish(room, JSON.stringify({
                type: 'USERLIST',
                msg: Array.from(rooms.get(room)!),
            }));
            console.log(nick, 'Se ha conectado a esta sala : ', room);
        },
        message(ws, message) {
            //@ts-ignore
            const { type, msg } = message;
            switcher(type, ws, ws.data.params.room, app.server, msg);
        },
        close(ws) {
            const { data: { params: {nick, room} } } = ws;
            if( !nick || !room ) return;
            app.server!.publish(room, JSON.stringify({
                type: 'BYE_USER',
                msg: `${nick} se ha desconectado`,
            }));
            ws.unsubscribe(room);
            usernames.delete(nick.toUpperCase());
            //UPDATE ROOM LIST
            let rm = rooms.get(room)!;
            rm!.delete(ws.id);
            rooms.set(room, rm);
            app.server!.publish(room, JSON.stringify({
                type: 'USERLIST',
                msg: Array.from(rooms.get(room)!),
            }));
            console.log('Se ha desconectado el usuario : ', nick)
        }
    })
    .listen(3000)

console.log("Servidor corriendo en el puerto 3000");
