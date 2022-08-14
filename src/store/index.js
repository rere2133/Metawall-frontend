import { createStore } from "vuex";
import { getProfile } from "../api/users";
import auth from "./modules/auth";

export default createStore({
  state: {
    userInfo: {
      name: "",
      set: "",
      photo: "",
    },
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
    globalLoading: false,
  },
  getters: {
    userInfo: (state) => state.userInfo,
    alert: (state) => state.alert,
    errMsg: (state) => state.errMsg,
    confirmMsg: (state) => state.confirmMsg,
    globalLoading: (state) => state.globalLoading,
  },
  mutations: {
    setUserInfo: (state, userInfo) => (state.userInfo = userInfo),
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
    setGlobalLoading: (state, globalLoading) =>
      (state.globalLoading = globalLoading),
  },
  actions: {
    async getProfileData({ state, commit }) {
      console.log("get user info");
      try {
        let res = await getProfile();
        let data = res.data.user;
        if (res.data.status == "success") {
          commit("setUserInfo", { ...state, ...data });
          // this.name = data.name;
          // this.sex = data.sex;
          // this.photo = data.photo || this.photo;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {
    auth,
  },
});
