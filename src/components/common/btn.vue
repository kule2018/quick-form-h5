<template>
  <div class="btn" v-bind:style="{ backgroundColor: color }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'btn',
    props: ['text','color'],
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btn {
    padding: 0.05rem 0.4rem;
    background-color:#ffcccc;
    border-radius:0.2rem;
  }
</style>
