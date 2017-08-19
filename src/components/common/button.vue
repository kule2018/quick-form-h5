<template>
  <div class="form">
    <div class="top">
      button
    </div>
    <div class="info">
      <div class="btn">default</div>
      <div class="btn btn-primary">primary</div>
      <div class="btn btn-dashed">dashed</div>
      <div class="btn btn-danger">danger</div>
    </div>
    <router-link to="/form">
      <div class="btn btn-primary bottomBtn">返回</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'button',
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .top {
    margin: 1rem auto;
    text-align: center;
    font-size: 1rem;
    color: #108ee9;
  }
  .info {
    width: 90%;
    margin: 0.43rem auto;
  }
  .info div {
    margin: 1rem auto;

  }

</style>
