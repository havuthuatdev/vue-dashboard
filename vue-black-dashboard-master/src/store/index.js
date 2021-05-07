import Vue from 'vue'
import Vuex from 'vuex'
import customers from './modules/customers'
import photographers from './modules/photographers'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        customers,
        photographers
    }
})