<template>
    <header class="my-header">MyHeader</header>
</template>

<script>
    export default {
        name: "MyHeader"
    }
</script>

<style>
.my-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 60px;
    background-color: #000;
    color: #fff;
}
</style>
