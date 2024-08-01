<script lang="ts">

    //@ts-ignore
    import { myUser } from '$lib/store';

    //TYPES
    const enum Type {
        ROOM = 'room',
        BOT = 'bot',
    }
    type data = {
        body:string,
        username:string,
        type:Type
    }
    //PROPS
    export let data:data;
</script>

<article class={$myUser.username === decodeURI(data.username) ? 'me' : ''}>
    <div class="username">
        {#if data.type !== Type.BOT}
            <i class="fa-solid fa-circle-user"></i>
        {/if}
        <h4 class="montserrat-alternates-bold">{decodeURI(data.username)} </h4>
    </div>
    <div class={`body ${data.type === Type.BOT ? 'typeBot' : ''}`}>
        <p class="montserrat-alternates-regular">{data.body}</p>
    </div>
</article>

<style lang="sass">

    .typeBot
        background: transparent !important
        box-shadow: none !important
        color: var(--txtPL) !important
        padding: 0 !important
    .me
        flex-direction: row-reverse
        //text-align: right

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
            @media(max-width: 500px)
                flex-direction: column
                gap: 0.4rem
            i
                font-size: 2.5rem
                color: var(--bgD)
                @media(max-width: 500px)
                    font-size: 2rem
            h4
                text-align: center
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
    
    @keyframes appear
        from
            opacity: 0
            transform: scale(0)
        to
            opacity: 1
            transform: scale(1)

</style>

