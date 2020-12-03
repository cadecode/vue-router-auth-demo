<template>
    <div class="side-bar">
        SideBar
        <ul>
            <li>
                <router-link to="/">首页</router-link>
            </li>
        </ul>
        <template v-for="(item, index) of $store.state.userRoutes">
            <menu-item :key="index" :item=item />
        </template>
    </div>
</template>

<script>
    import MenuItem from '@/components/MenuItem'

    export default {
        name: "Sidebar",
        components: {
            MenuItem
        }
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
