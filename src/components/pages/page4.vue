<template>
  <div class="upload">
    <div class="info">
      <div>
        <span class="text wx-titleBg"> 寻人启事</span>
        <div class="line"></div>
        <img src="../../assets/avator.jpg" alt="寻人" />
        <textarea class="text">
          "张三"，在本次地震中失去联系，有知情者请联系(电话:15939285XXX)望转发，万分感谢!
        </textarea>
      </div>

      <div class="btn uploadBtn">上传照片</div>
      <div class="btn uploadBtn">我也要发布寻人</div>
      <p class="copyright">腾讯新闻.地震救助平台</p>
      <span class="text">转发到</span>
      <div class="line"></div>
      <div class="share">
        <i class="fa fa-qq"></i>
        <i class="fa fa-wechat"></i>
        <i class="fa fa-safari"></i>
      </div>
    </div>
    <div class="tippop">
      <img src="../../assets/tipop.png" alt="tipop">
    </div>
  </div>
</template>

<script>
export default {
  name: 'page4',
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
