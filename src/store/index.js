import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    global: {

    }
  },
  mutations: {
    setGlobal(state, globalState = {}) {
      state.global = globalState;
    }
  },
  actions: {
    asyncSetGlobal(context, globalState) {
      context.commit('setGlobal', globalState)
    }
  },
  modules: {},
});
