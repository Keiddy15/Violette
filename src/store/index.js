import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tab: 'tab-1',
        pedidos: 0,
        dialogUserSelected: false,
        userSelected: []
    },
    mutations: {
        moveTab(state, n) {
            state.tab = 'tab-' + n;
        },
        setCountPedidos(state, n){
            state.pedidos = n;
        },
        passingUserSelected(state, payload){
            state.dialogUserSelected = payload.show;
            state.userSelected = payload.userSelected;
        }
    },
    actions: {},
    modules: {}
})
