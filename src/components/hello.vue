<template>
  <div class="hello">
    <div class="top">
      <img src="../assets/tnfe.png" />
    </div>
    <div class="title">
      <h3>TNFE-CLI</h3>
      <p>一个可以支持突发事件的快速h5模版</p>
    </div>
    <div class="btns">
      <mt-button type="default">default</mt-button>
      <mt-button type="primary" class="search">下一页</mt-button>
      <mt-button class="more-news"><a href="//github.com/Tnfe">关于我们</a></mt-button>
      <div class="tip">
          点击下一页代表同意<mt-button type="text" class="tips">《TNFE-CLI用户协议》</mt-button>
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
}
.top {
  margin: 1.5rem  auto;
  text-align: center;
}
.top img {
    width:5.352rem;
}
.title {
    margin: 2rem  auto;
    text-align: center;
    font-family: "Lucida Grande"
}
.title h3 {
    font-size: 1.8rem;
    color: #108ee9;
}
.title p {
    font-size: 0.7rem;
}
.btns{
    margin-top: 2rem;
    width:100%;
}

.btns .btn{
    margin: 0 auto .4rem auto;
}

.tip{
    margin-top: 0.3rem;
    text-align: center;
    line-height: 1rem;
    
    font-size: 0.45rem;
    
    z-index: 999;
    position: relative;
    height: 1rem;
}
.tips{
    color: #108ee9;
    text-decoration:underline;
}
.tlogo{
    bottom: 3rem;
    position: absolute;
    float: left;
    left: 50%;
    margin-left: -3rem;
    width: 6rem;
    display: flex;
    opacity: 0;
}
.tlogo img {
    width:6rem;
    height: 0.77rem;
    margin: 0;
}
</style>
