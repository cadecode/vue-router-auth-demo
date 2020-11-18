import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router'
import '@/assets/css/common.css'

Vue.config.productionTip = false

store.dispatch('setUserRoutes').then()

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
