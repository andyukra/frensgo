<script lang="ts">
    //@ts-ignore
    import { page } from '$app/stores';
    //@ts-ignore
    import { myUser, userlist } from '$lib/store';
    import { onMount } from 'svelte';
    //@ts-ignore
    import { goto } from '$app/navigation';
    
    //GLOBAL VARS
    let optsState:boolean = false;
    let changeAvatarStatus:boolean = false;
    let avatarUrlTemp:string = '';

    //GET LOCALSTORAGE AVATAR
    onMount(() => {
        if(!localStorage.getItem('avatar')) {
            localStorage.setItem('avatar', '');
            return;
        }
        if(localStorage.getItem('avatar')!.length > 0) $myUser.avatar = localStorage.getItem('avatar');
    });


    //CHANGE AVATAR LOGIC
    function changeAvatar():void {
        if(!avatarUrlTemp) return;
        localStorage.setItem('avatar', avatarUrlTemp);
        $myUser.avatar = avatarUrlTemp;
        optsState = false;
        goto('/rooms');
        return;
    }

</script>

<nav>
    <a href="/" class="kenia-regular">frens go</a>
    {#if $myUser.room}
        <h1 class="montserrat-alternates-bold">{$myUser.room}</h1>
    {/if}
    <div class="optsBX">
        {#if optsState}
            <div class="opts">
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <ul>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <li on:click={()=>changeAvatarStatus = !changeAvatarStatus}>
                        <p class="montserrat-alternates-bold">cambiar foto</p>
                        <i class="fa-solid fa-camera"></i>
                    </li>
                    {#if changeAvatarStatus}
                        <li style="display:flex;flex-direction:column;text-align:center;background:var(--bgD);color:white;">
                            <p class="montserrat-alternates-bold" style="margin-bottom:0.5rem;">Pegue el link de la foto</p>
                            <form on:submit|preventDefault={changeAvatar}>
                                <input type="url" placeholder="Ej: https://ibb.co/sd123.jpg" required bind:value={avatarUrlTemp} pattern="^.+(jpg|jpeg|png|gif|webm)$" title="Sólo links de imágenes">
                                <button class="montserrat-alternates-bold">aplicar</button>
                            </form>
                        </li>
                    {/if}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <li on:click={()=>optsState = !optsState}>
                        <p class="montserrat-alternates-bold">cancelar</p>
                        <i class="fas fa-times"></i>
                    </li>
                </ul>
            </div>
        {/if}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        {#if !$myUser.avatar}
            <i class="fa-solid fa-circle-user" on:click={()=>optsState = !optsState}></i>
        {:else}
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <img src={$myUser.avatar} alt="My avatar" on:click={()=>optsState = !optsState}>
        {/if}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        {#if $page.url.pathname === '/chat'}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <i class="fa-solid fa-bars movil" on:click={()=>$userlist = !$userlist}></i>
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
        z-index: 50
        h1
            color: white
        a
            text-decoration: none
            color: white
            font-size: 32px
        .optsBX
            display: flex
            align-items: center
            gap: 1rem
            position: relative
            & > img
                width: 35px
                height: 35px
                border-radius: 50%
                cursor: pointer
            & > i
                color: white
                font-size: 35px
                cursor: pointer
            .opts
                z-index: 51
                position: absolute
                top: 110%
                left: -250px
                width: 250px
                padding: 1rem
                background: #fafafa
                border-radius: 8px
                box-shadow: 1px 1px 1px #0003
                color: var(--bgD)
                ul
                    display: flex
                    flex-direction: column
                    gap: 0.3rem
                    li
                        list-style: none
                        padding: 1rem
                        display: flex
                        align-items: center
                        justify-content: space-between
                        cursor: pointer
                        transition: 0.3s background
                        transition: 0.5s color
                        border-radius: 8px
                        &:hover
                            background: var(--bgD)
                        &:hover
                            color: white
                        form
                            display: flex
                            flex-direction: column
                            gap: 1rem
                            button
                                width: 100%
                                padding: 0.4rem
                                border: none
                                background: var(--crash)
                                border-radius: 8px
                                cursor: pointer
                                transition: 0.3s
                                &:hover
                                    transform: scale(1.04)
                            input
                                padding: 0.5rem
                                &:focus
                                    outline: none
</style>

