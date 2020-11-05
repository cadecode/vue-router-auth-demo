<template>
    <div class="side-bar">SideBar</div>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style>
    .side-bar {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        width: 200px;
        height: 100%;
        padding-top: 90px;
        box-sizing: border-box;
        background-color: #999;
    }
</style>
