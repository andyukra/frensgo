<script lang="ts">
    //@ts-ignore
    import { myUser, muted, socket, pvs, pvBox, whispTarget } from '$lib/store';

    //TYPE
    const enum Role {
        GUEST = 'guest',
        USER = 'user',
        MODERATOR = 'moderator',
        ADMIN = 'administrator',
        OWNER = 'owner',
    }

    type User = {
        username: string,
        role: Role,
        avatar: string
    }


    //PROPS
    export let id:string;
    export let data:User;

    //OPTS
    let stateOpts:boolean = false;

    function toggleOpts():void {
        if($myUser.username === data.username) return;
        stateOpts = !stateOpts;
    }

    //SET ICONS ROLE
    function roleIcon():string {
        switch(data.role) {
            case Role.GUEST:
                return 'fa-solid fa-circle-question';
            case Role.USER:
                return 'fa-solid fa-user';
            case Role.MODERATOR:
                return 'fa-solid fa-shield';
            case Role.ADMIN:
                return 'fa-solid fa-wrench';
            case Role.OWNER:
                return 'fa-solid fa-crown';
        }
    }

    //SILENCE
    let isMuted:boolean = false;

    if($muted.has(data.username)) isMuted = true;

    function silence(name:string):void {
        if($myUser.username === name) return;
        $muted.add(name);
        isMuted = true;
        //CLOSE OPTS
        stateOpts = false;
    }

    //UNSILENCE
    function unsilence(name:string):void {
        if($myUser.username === name) return;
        const stat = $muted.delete(name);
        if(!stat) return;
        isMuted = false; 
        //CLOSE OPTS
        stateOpts = false;
    }

    //PRIVATE
    function openPv():void {
        $socket.send(JSON.stringify({
            type: 'OPEN_PV',
            msg: { to: id }
        }))
        const obj = {
            id: id,
            nick: data.username,
            me: $myUser.id,
            avatar: data.avatar
        }
        $pvs.add(JSON.stringify(obj));
        $pvs = $pvs;
        $pvBox.set(id, []);
        //CLOSE OPTS
        stateOpts = false;
    }

    //WHISPERS
    function whisp():void {
        $whispTarget = {
            username: data.username,
            id: id
        }
        //CLOSE OPTS
        stateOpts = false;
    }

    //BAN
    function ban():void {
        $socket.send(JSON.stringify({
            type: 'BAN',
            msg: { username: data.username, id }
        }));
        //CLOSE OPTS
        stateOpts = false;
    }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<article data-id={id} on:click={toggleOpts} class:muted={isMuted}>
    {#if data.avatar.length > 0}
        <img src={data.avatar} alt="my avatar">
    {:else}
        <i class="fa-solid fa-circle-user"></i>
    {/if}
    <h4 class="montserrat-alternates-bold">{decodeURI(data.username)}</h4>
    <i class={roleIcon()}></i>
</article>
{#if stateOpts}
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <ul class="opts">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        {#if isMuted}
            <li class="silence" on:click={()=>unsilence(data.username)}>
                <p class="montserrat-alternates-bold">quitar silencio</p>
                <i class="fas fa-volume-up"></i>           
            </li>      
        {:else}
            <li class="silence" on:click={()=>silence(data.username)}>
                <p class="montserrat-alternates-bold">silenciar</p>
                <i class="fas fa-volume-mute"></i>               
            </li>           
        {/if}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li on:click={openPv}>
            <p class="montserrat-alternates-bold">privado</p>
            <i class="fa-solid fa-message"></i>
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li on:click={whisp}>
            <p class="montserrat-alternates-bold">susurrar</p>
            <i class="fa-solid fa-ear-listen"></i>
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        {#if $myUser.role === Role.OWNER || $myUser.role === Role.ADMIN || $myUser.role === Role.MODERATOR}
            <li on:click={ban}>
                <p class="montserrat-alternates-bold">Banear</p>
                <i class="fa-solid fa-ban"></i>
            </li>
        {/if}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li on:click={toggleOpts}>
            <p class="montserrat-alternates-bold">cancelar</p>
            <i class="fas fa-times"></i>
        </li>
    </ul>
{/if}
<style lang="sass">

    .muted
        color: gray

    .opts
        background: var(--bgD)
        li
            list-style: none
            padding: 1rem
            display: flex
            justify-content: space-between
            cursor: pointer
            color: white

    article
        display: flex
        align-items: center
        justify-content: space-between
        padding: 1rem
        cursor: pointer
        background: transparent
        color: var(--txtPL)
        position: relative
        & > img
            width: 35px
            height: 35px
            border-radius: 50%
        i:nth-child(1)
            font-size: 2rem
        i:nth-child(2)
            font-size: 1.5rem
        h4
            font-size: 1rem
            text-align: center

</style>