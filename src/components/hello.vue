<template>
  <div class="hello">
    <div class="top">
      <img src="../assets/tnfe.png" />
    </div>
    <div class="title">
      <h3>Quick Form H5</h3>
      <p>一个支持突发事件的快速H5模版</p>
    </div>
    <div class="btns">
      <router-link to="/form">
        <div class="btn btn-primary">快速上手</div>
      </router-link>
      <div class="btn btn-dashed">
        <a href="//github.com/Tnfe">关于我们</a>
      </div>
      <div class="tip">
        点击"快速上手"代表同意
        <router-link to="/about">
          <span class="tips">《Quick Form H5用户协议》</span>
        </router-link>
      </div>
    </div>
    <div class="tlogo">
      <img src="../assets/logo.png" />
    </div>
  </div>
</template>


<script>
export default {
  name: 'hello',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.top {
  text-align: center;
}

.top img {
  margin: 1.5rem auto;
  width: 5.352rem;
}

.title {
  margin: 2rem auto 0;
  text-align: center;
}

.title h3 {
  font-size: 1.8rem;
  color: #108ee9;
}

.title p {
  font-size: 0.7rem;
}

.btns {
  margin-top: 3rem;
  width: 100%;
}

.btns .btn {
  margin: 0 auto .4rem auto;
}

.tip {
  margin-top: 0.3rem;
  text-align: center;
  line-height: 1rem;
  font-size: 0.45rem;
  z-index: 999;
  position: relative;
  height: 1rem;
}

.tips {
  color: #108ee9;
  text-decoration: underline;
}

.tlogo {
  margin: 2rem auto 1rem;
  width: 6rem;
  display: flex;
}

.tlogo img {
  width: 6rem;
  height: 0.77rem;
  margin: 0;
}
</style>
