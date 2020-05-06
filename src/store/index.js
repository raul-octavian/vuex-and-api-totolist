import Vuex from "vuex";
import Vue from "vue";
import todos from './modules/todos'

//?use vuex

Vue.use(Vuex);


//!create Store

export default new Vuex.Store({
    modules: {
        todos
    }
})