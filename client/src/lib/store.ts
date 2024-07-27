import { writable } from 'svelte/store';
//***************T Y P E S********************/
interface user {
    username: string;
    role: string,
    room: string
}

//***********S T O R E*******************/
export const myUser = writable<user|null>(null);
export const socket = writable<WebSocket|null>(null);