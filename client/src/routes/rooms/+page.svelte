<script lang="ts">
    // @ts-ignore
    import Room from 'comp/Room.svelte';
    // @ts-ignore
    import Navbar from 'comp/Navbar.svelte';
</script>

<Navbar />
<section>
    <Room name="Amigos 1" value="amigos1" maxUsers={100} connectedUsers={0} />
    <Room name="Amigos 2" value="amigos2" maxUsers={100} connectedUsers={0} />
    <Room name="Amor 1" value="amor1" maxUsers={100} connectedUsers={0} />
    <Room name="Amor 2" value="amor2" maxUsers={100} connectedUsers={0} />
    <Room name="Argentina" value="argentina" maxUsers={100} connectedUsers={0} />
    <Room name="México" value="mexico" maxUsers={100} connectedUsers={0} />
    <Room name="Perú" value="peru" maxUsers={100} connectedUsers={0} />
    <Room name="Venezuela" value="venezuela" maxUsers={100} connectedUsers={0} />
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