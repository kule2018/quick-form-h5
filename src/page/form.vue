<template>
  <div class="form">
    <div class="top">
      Form表单
    </div>
    <div class="info">
      
  
      <router-link to="/input">
        <div class="btn">input</div>
      </router-link>
      <router-link to="/button">
        <div class="btn">button</div>
      </router-link>
      <router-link to="/select">
        <div class="btn">select</div>
      </router-link>
      <router-link to="/calender">
        <div class="btn">calender</div>
      </router-link>
  
    </div>
    <router-link to="/upload">
      <div class="btn bottomBtn">下一页</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'form',
  data: () => ({
    email: '',
    phone: '',
    first_name: '',
    last_name: '',
  }),
  computed: {
    name() {
      return `${this.first_name} ${this.last_name}`;
    },
  },
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
</style>
