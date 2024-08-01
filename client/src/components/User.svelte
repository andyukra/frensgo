<script lang="ts">

    //TYPE
    type User = {
        username: string,
        role: string,
    }

    //PROPS
    export let id:string;
    export let data:User;
</script>

<article data-id={id}>
    <i class="fa-solid fa-circle-user"></i>
    <h4 class="montserrat-alternates-bold">{decodeURI(data.username)}</h4>
    <i class="fa-solid fa-circle-question"></i>
</article>

<style lang="sass">

    article
        display: flex
        align-items: center
        justify-content: space-between
        padding: 1rem
        transition: 0.3s
        cursor: pointer
        background: transparent
        color: var(--txtPL)
        &:hover
            background: var(--bgD)
            color: white
        i:nth-child(1)
            font-size: 2rem
        i:nth-child(2)
            font-size: 1.5rem
        h4
            font-size: 1rem
            text-align: center

</style>