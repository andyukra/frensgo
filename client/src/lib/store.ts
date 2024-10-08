import { writable } from 'svelte/store';
//***************T Y P E S********************/
const enum Type {
    ROOM = 'room',
    BOT = 'bot',
    AUDIO = 'audio',
    IMAGE = 'image',
    YT = 'yt',
    STICKER = 'sticker'
}

const enum Role {
    GUEST = 'guest',
    USER = 'user',
    MODERATOR = 'moderator',
    ADMIN = 'administrator',
    OWNER = 'owner',
}

type user = {
    username: string;
    role: Role,
    room: string,
    id:number,
    avatar: string|undefined
}

type pv = {
    id:number,
    nick:string,
    avatar:string|undefined,
    me:number
}

type pvMsg = {
    username: string,
    body: string,
    avatar: string|undefined,
    type:Type
}

type whisp = {
    username: string,
    id: number
}

//***********S T O R E*******************/
export const myUser = writable<user|null>(null);
export const socket = writable<WebSocket|null>(null);
export const userlist = writable<boolean>(false);
export const dialog = writable<boolean>(false);
export const modal = writable<boolean>(false);
export const modalSrc = writable<string>('');
export const muted = writable<Set<string>>(new Set());
export const pvs = writable<Set<pv>>(new Set());
export const pvBox = writable<Map<number, Array<pvMsg>>>(new Map());
export const pvAccept = writable<boolean>(false);
export const whispTarget = writable<whisp|null>(null);