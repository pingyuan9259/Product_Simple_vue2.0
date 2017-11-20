<style lang="scss" scoped>
  #app {
    width: 100%;
    min-height: 100vh;
  }
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Request from './utils/request';
import cookie from 'js-cookie';
import { APP_ENV } from './config/app';

export default {
  name: 'app',
  data() {
    return {
      showError: false,
    };
  },
  async created() {
    let _event = {
      methods: 'login',
      class: 'login',
      comment: '用户登录',
    };
    let userId = cookie.get(APP_ENV === 'pro' ? '_user_id' : '_user_id_' + APP_ENV);
    await Request.get({
      url: 'v3/user/detail/new',
      data: {
        id: userId,
        abc: 123,
      },
      _event,
    });
  },
};
</script>
