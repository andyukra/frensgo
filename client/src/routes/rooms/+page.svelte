<script lang="ts">
    // @ts-ignore
    import Room from 'comp/Room.svelte';
    // @ts-ignore
    import Navbar from 'comp/Navbar.svelte';
    
    export let data;
</script>

<Navbar />
<section>
    {#each data.data as room}
        <Room name={room.name} value={room.value} maxUsers={room.maxUsers} connectedUsers={room.connectedUsers}/>
    {/each}
</section>

<style lang="sass">

    section
        width: 100%
        padding: 1rem
        display: flex
        flex-direction: column
        gap: 1rem
        height: calc(100dvh - 64px)
        @media(max-width: 500px)
            padding: 0.5rem 0.3rem

</style>