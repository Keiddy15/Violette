import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tab: 'tab-1',
        pedidos: 0
    },
    mutations: {
        moveTab(state, n) {
            state.tab = 'tab-' + n;
        },
        setCountPedidos(state, n){
            state.pedidos = n;
        }
    },
    actions: {},
    modules: {}
})
