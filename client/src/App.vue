<template>
    <div id="app">
        <MyHeader></MyHeader>
        <PageBord></PageBord>
        <SideBar></SideBar>
    </div>
</template>

<script>

    import MyHeader from './components/MyHeader'
    import PageBord from './components/PageBord'
    import SideBar from './components/SideBar'

    export default {
        name: 'App',
        components: {
            MyHeader,
            PageBord,
            SideBar
        }
    }
</script>

<style>
    #app {
        height: 100%;
    }
</style>
