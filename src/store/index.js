import { createStore } from "vuex";

export default createStore({
  state: {
    alert: {
      dialog: false,
      title: "",
      msg: "",
    },
  },
  getters: {
    alert: (state) => state.alert,
  },
  mutations: {
    setAlert: (state, alert) => (state.alert = alert),
  },
  actions: {},
  modules: {},
});
