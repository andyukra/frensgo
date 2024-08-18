<script lang="ts">
    export let name:string;
    export let maxUsers: number;
    export let connectedUsers: number;
    export let value:string;

    const host = 'wss://frensgo.lat';
    // const host = 'ws://localhost:3000';

    // @ts-ignore
    import { myUser, socket } from '$lib/store';
     // @ts-ignore
     import { goto } from '$app/navigation';

    function goChat(room:string):void {
        if(!$myUser) return;
        $myUser = {...$myUser, room:room};
        $socket = new WebSocket(`${host}/chat?room=${$myUser.room}&nick=${$myUser.username}&avatar=${$myUser.avatar ? $myUser.avatar : ''}`);
        $socket.onmessage = (e:any) => {
            const { type, id } = JSON.parse(e.data);
            if(!$myUser.id) $myUser = {...$myUser, id:id}
            if(type && type === 'CONNECTED') {
                goto('/chat');
            }
        }
    }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<article on:click={()=>goChat(value)}>
    <h2 class="montserrat-alternates-bold">{name}</h2>
    <div>
        <p class="montserrat-alternates-bold">{connectedUsers} / {maxUsers}</p>
    </div>
</article>

<style lang="sass">

    article
        padding: 2rem
        border-left: 20px solid var(--bgD)
        border-radius: 8px
        box-shadow: 0 4px 4px #0004
        display: flex
        align-items: center
        justify-content: space-between
        width: 100%
        background: white
        cursor: pointer
        position: relative
        overflow: hidden
        @media(max-width: 500px)
            border-left: 10px solid var(--bgD)
        &:before
            content: ''
            position: absolute
            height: 100%
            width: 100%
            background: var(--bgD)
            top: 0
            left: -120%
            transition: 1s
            transform: skew(45deg)
        &:hover:before
            left: 50%
        &:hover p
            color: white
        h2
            color: var(--txtPL)
            @media(max-width: 500px)
                font-size: 1rem
        p
            color: var(--txtPL)
            position: relative
            transition: 1s
            z-index: 2
        

</style>