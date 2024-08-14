<script lang="ts">
    //@ts-ignore
    import { myUser, muted } from '$lib/store';

    //TYPE
    type User = {
        username: string,
        role: string,
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

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<article data-id={id} on:click={toggleOpts} class:muted={isMuted}>
    <i class="fa-solid fa-circle-user"></i>
    <h4 class="montserrat-alternates-bold">{decodeURI(data.username)}</h4>
    <i class="fa-solid fa-circle-question"></i>
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
        <li class="cancel" on:click={toggleOpts}>
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
        i:nth-child(1)
            font-size: 2rem
        i:nth-child(2)
            font-size: 1.5rem
        h4
            font-size: 1rem
            text-align: center

</style>