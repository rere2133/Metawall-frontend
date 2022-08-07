import { createStore } from "vuex";
import auth from "./modules/auth";

export default createStore({
  state: {
    alert: {
      dialog: false,
      title: "",
      msg: "",
    },
    confirmMsg: {
      loading: false,
      title: "",
      content: "",
      action: null,
    },
    errMsg: "",
  },
  getters: {
    alert: (state) => state.alert,
    errMsg: (state) => state.errMsg,
    confirmMsg: (state) => state.confirmMsg,
  },
  mutations: {
    setAlert: (state, alert) => {
      state.alert = alert;
      if (alert.dialog) {
        setTimeout(() => {
          state.alert = {
            dialog: false,
          };
        }, 3000);
      }
    },
    setErrMsg: (state, errMsg) => (state.errMsg = errMsg),
    setConfirmMsg: (state, confirmMsg) => (state.confirmMsg = confirmMsg),
    setConfirmLoading: (state, loading) =>
      (state.confirmMsg = { ...state.confirmMsg, loading: loading }),
  },
  actions: {},
  modules: {
    auth,
  },
});
