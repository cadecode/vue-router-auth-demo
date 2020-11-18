import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        Component: Home
    },
    {
        path: '*',
        name: 'NotFound',
        Component: () => import('@/views/NotFound.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
