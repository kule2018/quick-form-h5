<template>
  <div class="form">
    <div class="top">
      <p>*请留下联系方式</p>
      <p>有任何关于 <span></span> 的消息我们会与你联系</p>
    </div>
    
    <div class="info">
      <v-input :inputName="userName" ref="userName" v-focus-next-on-enter="'mobile'"></v-input>

      <v-input :inputName="mobile" ref="mobile" v-focus-next-on-enter="'submit'"></v-input>

      <input v-on:click="changeRoute('/upload')" class="btn btn-primary bottomBtn" type="button" ref="submit" value="提交">
    </div>

    <v-toast :visible="showToast" :message="'发布成功'" :className="''" :position="'middle'" :iconClass="'fa fa-check'">
    </v-toast>
  </div>
</template>

<script>
import Input from '@/components/common/input'
import Toast from '@/components/common/toast'

export default {
  name: 'form2',
  data: () => ({
    userName: {
      name: '姓名',
      value: '',
      isDanger: 0,
      reg: /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/,
      isRequired: true,
      placeholder: '姓名',
    },
    mobile: {
      name: '电话',
      value: '',
      isDanger: 0,
      reg: /^1[3|4|5|7|8]\d{9}$/,
      isRequired: true,
      placeholder: '电话',
    },
    showToast: false
  }),

  components: {
    'v-input': Input,
    'v-toast': Toast,
  },

  methods: {
    //检测非空
    checkEmpty: function (ele) {
      ele.isDanger = ele.value.trim().length > 0 ? ele.isDanger : 2
      return ele.value.trim().length > 0;
    },

    //检测表单
    checkForm: function (ele) {
      return ele.isDanger == 0
    },

    //路由跳转
    changeRoute: function (ele) {
      let allForm = [this.userName, this.mobile]
      
      //必填的字段
      let isRequired = []
      allForm.map((item) => {
        if (item.isRequired)
          isRequired = isRequired.concat(item)
      })

      //所有字段无报警
      if (isRequired.every(this.checkEmpty)) {
        if (allForm.every(this.checkForm)) {
          this.showToast = true
          let _self = this
          setTimeout(function () {
            this.showToast = false
            _self.$router.replace({ path: ele })
          }, 400)
        } else {
        }
      }
    },
  }
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
  margin: 2rem auto;
  text-align: center;
  font-size: 1rem;
  color: #108ee9;
}

.info {
  width: 90%;
  margin: 2rem auto 0.43rem auto;
}
</style>
