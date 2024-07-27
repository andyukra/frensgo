<script lang="ts">

    //@ts-ignore
    import { myUser } from '$lib/store';

    //TYPES
    type data = {
        body:string,
        username:string
    }

    //PROPS
    export let data:data;
</script>

<article class={$myUser.username === decodeURI(data.username) ? 'me' : ''}>
    <div class="username">
        <i class="fa-solid fa-circle-user"></i>
        <h4 class="montserrat-alternates-bold">{decodeURI(data.username)} </h4>
    </div>
    <div class="body">
        <p class="montserrat-alternates-regular">{data.body}</p>
    </div>
</article>

<style lang="sass">

    .me
        flex-direction: row-reverse
        //text-align: right

    article
        display: flex
        align-items: center
        gap: 1rem
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

</style>

