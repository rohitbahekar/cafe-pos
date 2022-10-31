<template>

    <main class="default-layout">
        <SideBarMenu />
        <Nuxt/>
    </main>
    
</template>

<script>
import SideBarMenu from '@/components/sidebar/SideBarMenu'
export default {
    components:{
        SideBarMenu
    }
}
</script>

<style lang="scss">

.default-layout{
    display: grid;
    grid-template-columns: auto 1fr;
    height: 100vh;
    width: 100%;
}

</style>