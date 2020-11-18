<template>
    <div class="page-bord">
        PageBord
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "PageBord"
    }
</script>

<style>
    .page-bord {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        padding: 90px 30px 30px 230px;
        background-color: #ddd;
    }
</style>
