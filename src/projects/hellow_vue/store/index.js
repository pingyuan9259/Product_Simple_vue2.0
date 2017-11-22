/* vuex入口
 * 作者：平原
 * 2017-11-20 */

import Vue from 'vue';
import Vuex from 'vuex';

// modules
import app from './modules/app';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    app,
  },
  strict: debug,
});
