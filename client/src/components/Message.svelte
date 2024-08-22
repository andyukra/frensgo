<script lang="ts">

    //@ts-ignore
    import { myUser, modal, modalSrc } from '$lib/store';
    import { onMount } from 'svelte';
    import '@justinribeiro/lite-youtube';

    //TYPES
    const enum Type {
        ROOM = 'room',
        BOT = 'bot',
        AUDIO = 'audio',
        IMAGE = 'image',
        YT = 'yt',
        STICKER = 'sticker',
        PV = 'pv',
        WHISPER = 'whisper',
    }
    type data = {
        body:string,
        username:string,
        type:Type,
        avatar:string,
    }
    //PROPS
    export let data:data;

    //VIDEO LOGIC
    let ytCode:string|null = null;

    onMount(()=>{
        if(/^https:\/\/(www\.)?youtu.+\//.test(data.body)) {
            const ytCodeUnparsed = data.body.match(/(\.be\/|v=).{11}/);
            ytCode = ytCodeUnparsed![0].replace(ytCodeUnparsed![1], '');
            data.type = Type.YT;
        }
    });

    //ME
    const me:boolean = $myUser.username === decodeURI(data.username);
    let screen:number;

    //FUNCTION MODAL
    function openModal(e:any):void {
        $modalSrc = e.src;
        $modal = true;
    }

    //MOBILE MODE
    function articleMobile(scr:any):string {
        if(data.type === Type.BOT) return '';
        let style:string = '';
        if(screen < 500) {
            style += 'flex-direction:column;gap:0.4rem !important;'
            if(me) {
                style += 'align-items:end;'
            } else {
                style += 'align-items:start;'
            }
        }
        return style;
    }

    function bodyClass():string {
        switch(data.type) {
            case Type.BOT : return 'typeBot';break;
            case Type.AUDIO : return 'typeAudio';break;
            case Type.IMAGE : return 'typeImg';break;
            case Type.STICKER : return 'typeBot';break;
            case Type.PV: return 'typePv';break;
            default: return ""
        }
    }

</script>

<svelte:window bind:outerWidth={screen} />
<article class={`${me ? 'me' : ''}`} style={articleMobile(screen)}>
    <div class="username">
        {#if data.type !== Type.BOT}
            {#if data.avatar}
                {#if data.avatar.length > 0}
                    <img src={data.avatar} alt="avatar of user">
                {:else}
                    <i class="fa-solid fa-circle-user"></i>
                {/if}
            {:else}
                <i class="fa-solid fa-circle-user"></i>
            {/if}
        {/if}
        <h4 class="montserrat-alternates-bold">{decodeURI(data.username)} </h4>
        {#if data.type === Type.WHISPER}
            <p class="montserrat-alternates-bold">(susurro): </p>
        {/if}
    </div>
    <div class='bodyBX'>
        <div class={`body ${bodyClass()}`}>
            {#if data.type === Type.ROOM || data.type === Type.BOT || data.type === Type.PV || data.type === Type.WHISPER}
                <p class="montserrat-alternates-regular">{data.body}</p>
            {:else if  data.type === Type.AUDIO}
                <audio src={data.body} controls ></audio>
            {:else if data.type === Type.IMAGE || data.type === Type.STICKER}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <img src={data.body} alt="Imagen subida Por un usuario" on:click={e=>openModal(e.target)} style={`cursor:pointer;${data.type === Type.STICKER ? 'width:150px;' : ''}`}/>
            {:else if data.type === Type.YT}
                <lite-youtube class="ytFrame" videoid={ytCode}></lite-youtube>
            {/if}
        </div>
    </div>
</article>

<style lang="sass">

    .typePv
        padding: 0.5rem 0.8rem !important
        margin-bottom: 0.4rem

    .ytFrame
        width: 40vw
        height: 400px
        @media(max-width: 500px)
            width: 75vw
            height: 200px

    .typeAudio
        padding: 0 !important
        background: transparent !important
        box-shadow: none !important

    .typeImg
        img
            max-width: 100px
            border-radius: 8px
            @media(max-width: 500px)
                max-width: 100px
    

    .typeBot
        background: transparent !important
        box-shadow: none !important
        color: var(--txtPL) !important
        padding: 0 !important
        margin: 0.5rem 0
        & > img
            border-radius: 8px
            width: 130px !important
            height: 130px
            @media(max-width: 500px)
                width: 100px !important
                height: 100px
    .me
        flex-direction: row-reverse
        .username
            flex-direction: row-reverse !important

    article
        display: flex
        align-items: center
        gap: 1rem
        transform-origin: 0 0
        animation-name: appear
        animation-duration: 0.3s
        animation-timing-function: cubic-bezier(.87, -1.38, .03, 1.54)
        .username
            display: flex
            justify-content: center
            align-items: center
            gap: 1rem
            color: var(--bgD)
            & > img
                width: 2.5rem
                height: 2.5rem
                border-radius: 50%
            @media(max-width: 500px)
                flex-direction: row
                gap: 0.4rem
            i
                font-size: 2.5rem
                color: var(--bgD)
                @media(max-width: 500px)
                    font-size: 1.5rem
            h4
                text-align: center
                @media(max-width: 500px)
                    font-size: 1rem
        .bodyBX
            .body
                padding: 1rem
                border-radius: 20px
                background: #fff
                width: auto
                box-shadow: 0 2px 2px #0003
                height: 100%
                display: flex
                align-items: center
                color: var(--txtSL)
                @media(max-width: 500px)
                    padding: 0.5rem 0.8rem
                p
                    @media(max-width: 500px)
                        font-size: 0.8rem
    
    @keyframes appear
        from
            opacity: 0
            transform: scale(0)
        to
            opacity: 1
            transform: scale(1)

</style>

