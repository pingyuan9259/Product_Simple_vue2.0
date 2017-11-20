<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'hello',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      msg: 'hello',
    }),
  },
  created() {
    this.$store.dispatch('setText', 'new App use vue2.0 + vueRouter2.0 + vuex2.0 + axios');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  margin-top: 10%;
  margin-left: 40%;
}
h1 {
  font-weight: normal;
  text-align: center;
}
</style>
