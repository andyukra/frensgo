<script lang="ts">
    //@ts-ignore
    import { page } from '$app/stores';
    //@ts-ignore
    import { myUser, userlist } from '$lib/store';
</script>

<nav>
    <a href="/" class="kenia-regular">frens go</a>
    {#if $myUser.room}
        <h1 class="montserrat-alternates-bold">{$myUser.room}</h1>
    {/if}
    <div>
        <i class="fa-solid fa-circle-user"></i>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        {#if $page.url.pathname === '/chat'}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <i class="fa-solid fa-bars movil"  on:click={()=>$userlist = !$userlist}></i>
        {/if}
    </div>
</nav>

<style lang="sass">

    .movil
        display: none
        @media(max-width: 1200px)
            display: block

    nav
        display: flex
        align-items: center
        justify-content: space-between
        height: 64px
        padding: 0 1rem
        background: var(--bgD)
        position: sticky
        top: 0
        h1
            color: white
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

