<template>
  <div class="about">
    <p class="title">TNFE-CLI用户协议</p>
    <p>我们是腾讯新闻前端团队，制作这个项目模板的目的就是：帮你快速上线一个紧急项目！</p>
    <p>这个项目模板使用基于Vue-cli，自定义了一套常用的Form表单组件，直接搬去用就好啦~</p>
    <p>原则上，所有页面公用的样式写到 App.vue 中，组件内独有的样式写在组件的 scoped 样式中。</p>
    <p>没有什么用户协议，你高兴就好！</p>
    <router-link to="/hello">
      <div class="btn btn-primary btn-close">关闭</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'about',
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    overflow: auto;
  }
  .title {
    text-align: center;
    margin: 2rem auto;
    font-size: 1rem;
  }
  p {
    font-size: 0.60rem;
    margin: 1.49rem 1.49rem;
    line-height: 1.02rem;
    text-align: left;
  }
  .btn-close {
    margin: 2rem auto 1rem auto;
  }
</style>
