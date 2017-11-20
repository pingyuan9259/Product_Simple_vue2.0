const app = {
  state: {
    hello: '',
  },
  mutations: {
    SET_TEXT: (state, result) => {
      state.hello = result;
    },
  },
  actions: {
    setText: ({ commit }, result) => { // 更改欢迎语
      commit('SET_TEXT', result);
    },
  },
};

export default app;
