import { myUser, socket } from '$lib/store.ts';
import { redirect } from '@sveltejs/kit';

const host = "https://frensgo.lat";
// const host = "http://localhost:3000";

export async function load() {
    let sock;
    let data;
    myUser.subscribe(val => data = val);
    socket.subscribe(val => sock = val);
    const res = await fetch(`${host}/getRooms`);
    if(!res.ok) {
        throw redirect(307, "/");
    }
    const response = await res.text();
    const rooms = JSON.parse(response);
    if(!data) {
        throw redirect(307, "/");
    } else {
        return {
            data : rooms
        }
    }
}