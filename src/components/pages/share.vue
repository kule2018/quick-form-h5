<template>
  <div class="hello">
    share
    <router-link to="/hello">
      <div class="btn">下一页</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'share',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
