import { myUser } from '$lib/store.ts';
import { redirect } from '@sveltejs/kit';

export function load() {
    let data;
    myUser.subscribe(val => data = val);
    if(data) {
        throw redirect(307, "/rooms");
    }
}