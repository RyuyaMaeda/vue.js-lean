import { createStore } from "vuex";

export default createStore({
  state: {
    message: "こんにちは"
  },
  mutations: {
    changeMessage(state) {
      state.message = "さようなら";
    }
  },
  actions: {},
  modules: {}
});
