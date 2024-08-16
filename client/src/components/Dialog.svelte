<script lang="ts">
    export let msg:string;
    export let time:number;
    //@ts-ignore
    import { dialog } from '$lib/store';
    import { onMount, onDestroy } from 'svelte';

    onMount(() => {
        document.onkeydown = () => false;
    });
    onDestroy(() => {
        document.onkeydown = null;
    });

    setTimeout(()=>$dialog = false, time);
</script>

<section>
    <article>
        <h4 class="montserrat-alternates-medium">{msg}</h4>
    </article>
</section>

<style lang="sass">

    section
        width: 100vw
        height: 100dvh
        position: fixed
        top: 0
        left: 0
        z-index: 999
        background: #0005
        backdrop-filter: blur(7px)
        display: flex
        justify-content: center
        align-items: center
        article
            display: flex
            justify-content: center
            align-items: center
            padding: 1rem
            border-radius: 20px
            background: var(--bgMsgL)
            h4
                text-align: center


</style>