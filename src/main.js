import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'
import axios from 'axios'
import router from "./router";
import modal from "./plugins/ModalWindow/index"


Vue.prototype.axios = axios

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(modal)
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
