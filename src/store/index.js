import Vue from 'vue'
import Vuex from 'vuex'
import paymentModule from './paymentModule'



Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        paymentModule

    }
})