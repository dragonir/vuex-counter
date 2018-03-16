import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count:0
}


const actions = {
    increment:({commit}) => commit("increment"),
    decrement:({commit}) => commit("decrement")
}

const getters = {
    add(state){
        return state.count*5
    }
}


const mutations = {
    increment(state){
        state.count = state.count+1
    },
    decrement(state){
        state.count = state.count-1
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})