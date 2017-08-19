<template>
  <div class="upload">
    <div class="top">
      upload
    </div>
    <div class="info">
      <router-link to="/share">
        <div class="btn">下一页</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'upload',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.upload {
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
</style>
