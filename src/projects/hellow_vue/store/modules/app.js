/* 示例状态机
 * 作者：平原
 * 2017-11-20 */

const state = {
  hello: '',
};

const mutations = {
  SET_TEXT: (state, result) => {
    state.hello = result;
  },
};

const actions = {
  setText: ({ commit }, result) => { // 更改欢迎语
    commit('SET_TEXT', result);
  },
};

export default {
  state,
  mutations,
  actions,
};
