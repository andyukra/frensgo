<script lang="ts">
    //@ts-ignore
    import Navbar from 'comp/Navbar.svelte';
    //@ts-ignore
    import Message from 'comp/Message.svelte';
    //@ts-ignore
    import User from 'comp/User.svelte';
    //@ts-ignore
    import { socket, myUser } from '$lib/store';
    import { onMount } from 'svelte';

    //TYPES
    type Msg = {
        username:string,
        body:string,
    }

    //SET GLOBAL VARIABLES
    let message:string = '';
    let chatElem:any = null;
    let users:any = [];
    //MESSAGES STATE
    let chatBX:Array<Msg> = [{username: 'frensgo', body: `Bienvenido a la sala ${$myUser.room}`}];

    //HELPERS
    function scrollToBottom(node:any) {node.scroll({ top: node.scrollHeight, behavior: 'smooth' });}

    //GET LIST ON RENDER THIS PAGE
    onMount(() => {
        $socket.send(JSON.stringify({
            type: 'GETUSERLIST'
        }));
    });

    //EVENTS SWITCH
    function switcher(type:string, msg:any|undefined):void {
        switch(type) {
            case 'USERLIST':
                const ul = new Map(msg);
                users = ul;
                break;
            case 'NEW_USER':
                console.log(msg);
                break;
            case 'BYE_USER':
                console.log(msg);
                break;
            case 'ROOM_MSG':
                chatBX.push(msg);
                chatBX = chatBX;
                if(chatBX.length >= 30) {
                    chatBX.shift();
                    chatBX = chatBX;
                }
                setTimeout(()=>scrollToBottom(chatElem),0.1);
        }
    }

    //SET WS EVENTS
    $socket.onmessage = (e:any) => {
        const { type, msg } = JSON.parse(e.data);
        switcher(type, msg);
    }

    //FORM HANDLERS
    function roomMsg():void {
        if(!message || message.length === 0 || message.length > 120) return;
        $socket.send(JSON.stringify({
            type: 'ROOM_MSG',
            msg: message.trim(),
        }));
        message = '';
    }

</script>

<Navbar />
<section>
    <article class="chatBX">
        <div class="chat" bind:this={chatElem}>
            {#each chatBX as msg}
                <Message data={msg}/>
            {/each}
        </div>
        <div class="msg">
            <div class="tools">
                <div class="txtStyle">
                    <button class="montserrat-alternates-regular activeStyle">T</button>
                    <button class="montserrat-alternates-medium">T</button>
                    <button class="montserrat-alternates-bold">T</button>
                </div>
            </div>
            <form on:submit|preventDefault={roomMsg}>
                <input class="montserrat-alternates-regular" type="text" placeholder="Escribe tu mensaje..." maxlength="120" minlength="1" bind:value={message}>
                <button>
                    <i class="fa-solid fa-paper-plane"></i>
                </button>
            </form>
        </div>
    </article>
    <article class="users">
        <h3 class="montserrat-alternates-bold">Usuarios conectados: {users.size}</h3>
        <div class="userlist">
            {#each users.entries() as [k, v]}
                <User id={k} data={v}/>
            {/each}
        </div>
    </article>
</section>

<style lang="sass">

    .activeStyle
        color: var(--crash) !important

    section
        display: flex
        gap: 1rem
        height: calc(100% - 64px)
        width: 100%
        padding: 1rem
        background: var(--bgL)
        @media(max-width: 500px)
            padding: 0.5rem
        article.chatBX
            display: flex
            gap: 1rem
            flex-direction: column
            flex: 4
            .chat
                background: var(--bgMsgL)
                height: 75dvh
                overflow: auto
                padding: 1rem
                border-radius: 20px
                box-shadow: 0 4px 4px #0003
                display: flex
                flex-direction: column
                gap: 0.5rem
            .msg
                background: var(--bgMsgL)
                height: 15dvh
                border-radius: 20px
                display: flex
                flex-direction: column
                box-shadow: 0 4px 4px #0003
                .tools
                    padding: 0.5rem 1rem
                    background: var(--bgD)
                    border-radius: 20px 20px 0 0
                    .txtStyle
                        display: flex
                        gap: 1rem
                        button
                            font-size: 1.5rem
                            padding: 0
                            border: none
                            background: transparent
                            color: white
                            cursor: pointer
                form
                    width: 100%
                    display: flex
                    gap: 1rem
                    align-items: center
                    padding: 1rem
                    margin: auto
                    input
                        border: none
                        width: 100%
                        padding: 1rem
                        border-radius: 20px
                        font-size: 1rem
                        color: var(--txtSL)
                        box-shadow: 0 4px 4px #0003
                        &:focus
                            outline: none
                    button
                        border: none
                        background: transparent
                        &:focus
                            outline: none
                        i
                            color: var(--bgD)
                            font-size: 25px
                            cursor: pointer

        article.users
            display: flex
            gap: 1rem
            flex-direction: column
            background: var(--bgMsgL)
            flex: 1
            border-radius: 20px
            box-shadow: 0 4px 4px #0003
            @media(max-width: 1200px)
                display: none
            h3
                text-align: center
                padding: 1rem
                background: var(--bgD)
                color: white
                border-radius: 20px 20px 0 0
            .userlist
                height: 100%
                overflow: auto

</style>