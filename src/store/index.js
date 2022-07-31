import { createStore } from "vuex";
import auth from "./modules/auth";

export default createStore({
  state: {
    alert: {
      dialog: false,
      title: "",
      msg: "",
    },
    errMsg: "",
  },
  getters: {
    alert: (state) => state.alert,
    errMsg: (state) => state.errMsg,
  },
  mutations: {
    setAlert: (state, alert) => (state.alert = alert),
    setErrMsg: (state, errMsg) => (state.errMsg = errMsg),
  },
  actions: {},
  modules: {
    auth,
  },
});
