import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '@/assets/css/common.css'

Vue.config.productionTip = false

store.dispatch('setUserRoutes').then()

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
