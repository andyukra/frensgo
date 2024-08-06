<script lang="ts">
    // @ts-ignore
    import { myUser } from '$lib/store';
    // @ts-ignore
    import { goto } from '$app/navigation';

    let username:string = '';
    let check:boolean = false;
    let regexp:RegExp = /^(\w|\s|ñ)+$/;

    async function enter() {
        if(!username) return;
        const un = username.trim().replace(/\s\s+/, ' ');
        if(!regexp.test(un)) return;
        if(un.length > 25) return;
        if(!check) {
            alert('confirma que eres mayor de edad');
            return;
        }
        $myUser = {
            username: un,
            role: 'guest',
            room: '',
        }
        goto('/rooms');
    }
</script>

<div class="container">
    <div class="header">
        <h1 class="kenia-regular">frens go</h1>
        <p class="montserrat-alternates-regular">un chat para todxs</p>
    </div>
    <form on:submit|preventDefault={enter}>
        <input class="montserrat-alternates-bold" type="text" placeholder="Escribe tu nick..." maxlength="25" minlength="3" required bind:value={username} pattern="^(\w|\s|ñ)+$">
        <button class="montserrat-alternates-medium">chatear</button>
        <div class="check">
            <input type="checkbox" id="check" bind:checked={check}>
            <p class="montserrat-alternates-medium">Soy mayor de edad</p>
        </div>
    </form>
</div>

<style lang="sass">

    .container
        width: auto
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        height: 100dvh
        width: 35%
        margin: auto
        @media(max-width: 1700px)
            width: 50%
        @media(max-width: 1243px)
            width: 90%

    .header
        line-height: 6.1rem
        @media(max-width: 500px)
            line-height: 3rem
        h1
            color: var(--txtPL)
            font-size: 200px
            @media(max-width: 690px)
                font-size: 100px
        p
            color: var(--txtSL)
            font-size: 32px
            @media(max-width: 500px)
                font-size: 20px
    form
        margin-top: 1rem
        width: 90%
        display: flex
        flex-direction: column
        gap: 15px
        input[type="text"]
            padding: 1rem
            border-radius: 8px
            border: none
            border-left: 5px solid var(--bgD)
            box-shadow: 0 2px 4px #0004
            background: var(--bgMsgL)
            font-size: 1rem
            text-align: center
            color: var(--txtSL)
            &:focus
                outline: none
            &::placeholder
                color: #c0a9ff
        button
            box-shadow: 0 2px 4px #0004
            padding: 1rem
            border: none
            background: var(--bgD)
            color: white
            font-size: 1rem
            border-radius: 8px
            cursor: pointer
            transition: 0.3s
            &:hover
                transform: scale(1.03)
            &:focus
                outline: none
    .check
        display: flex
        justify-content: start
        gap: 1rem
        p
            color: var(--txtSL)
    

</style>