<style lang="scss" scoped>
  @import './index';
</style>

<template>
  <div class="hello">
    <img src="../../assets/logo.png">
    <h1>{{ hello }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'hello',

  data() {
    return {
    };
  },

  computed: mapState({
    hello: state => state.app.hello,
  }),

  created() {
    this.$store.dispatch('setText', 'new App use vue2.0 + vueRouter2.0 + vuex2.0 + axios');
  },
};
</script>
