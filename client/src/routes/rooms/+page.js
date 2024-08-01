import { myUser, socket } from '$lib/store.ts';
import { redirect } from '@sveltejs/kit';

export function load() {
    let sock;
    let data;
    myUser.subscribe(val => data = val);
    socket.subscribe(val => sock = val);
    if(!data) {
        throw redirect(307, "/")
    } else {
        return {
            data
        }
    }
}