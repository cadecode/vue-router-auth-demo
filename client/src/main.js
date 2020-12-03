import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router'
import '@/assets/css/common.css'
import {generateRoutes} from '@/lib/utils'

router.beforeEach(async (to, from, next) => {
    if (!store.state.hasAuth) {
        await store.dispatch("setUserRoutes")
        const newRoutes = generateRoutes(store.state.userRoutes)
        console.log(newRoutes)
        router.addRoutes(newRoutes)
        next({path: to.path})
    } else {
        next()
    }
})

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
