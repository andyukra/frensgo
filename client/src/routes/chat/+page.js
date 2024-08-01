import { myUser, socket } from '$lib/store.ts';
import { redirect } from '@sveltejs/kit';

export function load() {
    let data;
    let sock;
    myUser.subscribe(val => data = val);
    socket.subscribe(val => sock = val);
    if(!data || !sock) {
        throw redirect(307, "/");
    }
}