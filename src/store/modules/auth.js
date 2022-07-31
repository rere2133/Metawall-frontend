const moduleAuth = {
  state: {
    test: "hi",
  },
  getters: {
    test: (state) => state.test,
  },
  mutations: {
    setTest: (state, test) => (state.test = test),
  },
  actions: {},
};
export default moduleAuth;
