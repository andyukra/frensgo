<script lang="ts">
    //@ts-ignore
    import Navbar from 'comp/Navbar.svelte';
    //@ts-ignore
    import Message from 'comp/Message.svelte';
    //@ts-ignore
    import User from 'comp/User.svelte';
    //@ts-ignore
    import Dialog from 'comp/Dialog.svelte';
    //@ts-ignore
    import Tools from 'comp/Tools.svelte';
    //@ts-ignore
    import Modal from 'comp/Modal.svelte';
    //@ts-ignore
    import { socket, myUser, userlist, dialog, modal, modalSrc, muted } from '$lib/store';
    import { onMount, onDestroy } from 'svelte';
    //@ts-ignore
    import { goto } from '$app/navigation';

    //TYPES
    const enum Type {
        ROOM = 'room',
        BOT = 'bot',
        AUDIO = 'audio',
        IMAGE = 'image',
        YT = 'yt',
        STICKER = 'sticker'
    }
    type Msg = {
        username:string,
        body:string,
        type:Type
    }


    //SET GLOBAL VARIABLES
    let message:string = '';
    let chatElem:any = null;
    let users:any = [];
    //MESSAGES STATE
    let chatBX:Array<Msg> = [{username: 'frensgo :', body: `Bienvenido a la sala ${$myUser.room}`, type: Type.BOT}];

    //HELPERS
    function scrollToBottom(node:any) {node.scroll({ top: node.scrollHeight, behavior: 'smooth' });}

    //GET LIST ON RENDER THIS PAGE
    onMount(() => {
        $socket.send(JSON.stringify({
            type: 'GETUSERLIST'
        }));
    });

    //DESTROY SOCKET WHEN EXIT FROM THIS PAGE
    onDestroy(() => {
        $socket.close();
        $socket = null;
    });

    //EVENTS SWITCH
    function switcher(type:string, msg:any|undefined):void {
        switch(type) {
            case 'USERLIST':
                const ul = new Map(msg);
                users = ul;
                break;
            case 'NEW_USER':
                const newMsg = {
                    username: 'frensgo :',
                    body: msg,
                    type: Type.BOT
                }
                chatBX.push(newMsg);
                chatBX = chatBX;
                break;
            case 'BYE_USER':
                const newMsg2 = {
                    username: 'frensgo :',
                    body: msg,
                    type: Type.BOT
                }
                chatBX.push(newMsg2);
                chatBX = chatBX;
                break;
            case 'ROOM_MSG':
                if($muted.has(msg.username)) return;
                chatBX.push({...msg, type:Type.ROOM });
                chatBX = chatBX;
                if(chatBX.length >= 100) {
                    chatBX = [];
                    const newMsg = {
                        username: 'frensgo :',
                        body: 'Limpieza automática activada',
                        type: Type.BOT
                    }
                    chatBX.push(newMsg);
                    chatBX = chatBX;
                }
                setTimeout(()=>scrollToBottom(chatElem),0.1);
                break;
            case 'CALM':
                $dialog = true;
                break;
            case 'AUDIO':
                chatBX.push({...msg, type:Type.AUDIO });
                chatBX = chatBX;
                break;
            case 'IMG':
                chatBX.push({...msg, type:Type.IMAGE });
                chatBX = chatBX;
                break;
            case 'STICKER':
                chatBX.push({...msg, type:Type.STICKER });
                chatBX = chatBX;
                break;
        }
    }

    //SET WS EVENTS
    $socket.onmessage = (e:any) => {
        const { type, msg } = JSON.parse(e.data);
        switcher(type, msg);
    }

    $socket.onclose = () => {
        goto('/rooms');
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

{#if $dialog}
    <Dialog msg="Aver si nos calmamos un poquito :)" time={5000}/>
{/if}
{#if $modal && $modalSrc}
    <Modal />
{/if}
<Navbar />
<section>
    <article class="chatBX">
        <div class="chat" bind:this={chatElem}>
            {#each chatBX as msg}
                <Message data={msg}/>
            {/each}
        </div>
        <div class="msg">
            <Tools />
            <form on:submit|preventDefault={roomMsg}>
                <input class="montserrat-alternates-regular" type="text" placeholder="Escribe tu mensaje..." maxlength="120" minlength="1" bind:value={message}>
                <button>
                    <i class="fa-solid fa-paper-plane"></i>
                </button>
            </form>
        </div>
    </article>
    <article class={`users ${$userlist ? 'showUserlist' : ''}`}>
        <h3 class="montserrat-alternates-bold">Usuarios conectados: {users.size}</h3>
        <div class='userlist'>
            {#each users.entries() as [k, v]}
                <User id={k} data={v}/>
            {/each}
        </div>
    </article>
</section>

<style lang="sass">
    .showUserlist
        position: fixed
        z-index: 2
        left: 0 !important

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
            @media(max-width: 500px)
                gap: 0.5rem
            .chat
                background: var(--bgMsgL)
                height: 95dvh
                overflow-y: auto
                overflow-x: hidden
                padding: 1rem
                border-radius: 8px
                box-shadow: 0 4px 4px #0003
                display: flex
                flex-direction: column
                gap: 0.5rem
            .msg
                background: var(--bgMsgL)
                height: 15dvh
                border-radius: 8px
                display: flex
                flex-direction: column
                box-shadow: 0 4px 4px #0003
                form
                    width: 100%
                    display: flex
                    gap: 1rem
                    align-items: center
                    padding: 1rem
                    margin: auto
                    @media(max-width: 500px)
                        padding: 0.5rem
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
            border-radius: 8px
            box-shadow: 0 4px 4px #0003
            transition: 0.3s
            @media(max-width: 1200px)
                position: fixed
                left: 100%
                width: 100%
                height: calc(100dvh - 64px)
                border-radius: 0 !important
                top: 64px
                h3
                    border-radius: 0 !important
            h3
                text-align: center
                padding: 1rem
                background: var(--bgD)
                color: white
                border-radius: 8px 8px 0 0
            .userlist
                height: 100%
                overflow: auto

</style>