<script lang="ts">
    //@ts-ignore
    import { page } from '$app/stores';
    //@ts-ignore
    import { myUser } from '$lib/store';
</script>

<nav>
    <a href="/" class="kenia-regular">frens go</a>
    {#if $myUser.room}
        <h1 class="kenia-regular">{$myUser.room}</h1>
    {/if}
    <div>
        <i class="fa-solid fa-circle-user"></i>
        {#if $page.url.pathname === '/chat'}
            <i class="fa-solid fa-bars movil"></i>
        {/if}
    </div>
</nav>

<style lang="sass">

    .movil
        display: none
        @media(max-width: 500px)
            display: block

    nav
        display: flex
        align-items: center
        justify-content: space-between
        height: 64px
        padding: 0 1rem
        background: var(--bgD)
        h1
            color: white
            letter-spacing: 1rem
            @media(max-width: 700px)
                letter-spacing: 0
        a
            text-decoration: none
            color: white
            font-size: 32px
        div
            display: flex
            align-items: center
            gap: 1rem
            i
                color: white
                font-size: 35px

</style>

