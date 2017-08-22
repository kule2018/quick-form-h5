<template>
  <div class="form">
    <div class="top">
      发布寻人
    </div>

    <div class="info">
      <v-input :props="userName" ref="userName" v-focus-next-on-enter="'userAge'"></v-input>
      
      <v-radio :props="userSex"></v-radio>
      
      <v-input :props="userAge" ref="userAge" v-focus-next-on-enter="'submit'"></v-input>

      <input v-on:click="changeRoute('/page3')" class="btn btn-primary bottomBtn" type="button" ref="submit" value="发布">
    </div>

    <v-toast :visible="showToast" :message="'发布成功'" :className="''" :position="'middle'" :iconClass="'fa fa-check'">
    </v-toast>
  </div>
</template>

<script>
import Input from '@/components/common/input'
import Toast from '@/components/common/toast'
import Radio from '@/components/common/radio'
import bus from '@/utils/bus'

export default {
  name: 'page2',
  data: () => ({
    userName: {
      title: '姓名',
      value: '',
      isDanger: 0,
      reg: /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/,
      isRequired: true,
      placeholder: '姓名',
    },

    userAge: {
      title: '年龄',
      value: '',
      isDanger: 0,
      reg: /^(\d{1,2})$/,
      isRequired: false,
      placeholder: '年龄',
    },

    userSex: {
      title: '性别',
      isDanger: 0,
      options: [
        {label: '男', value: 'male', disabled: false},
        {label: '女', value: 'female', disabled: false},
      ],
      value: '',
      isRequired: true,
    },

    showToast: false,

    // password.reg: /^[\w!@#$%^&*.]{6,16}$/,
    // mail.reg: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
  }),

  components: {
    'v-input': Input,
    'v-toast': Toast,
    'v-radio': Radio,
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
      let allForm = [this.userName, this.userSex, this.userAge]
      
      //必填的字段
      let isRequired = []
      allForm.map((item) => {
        if (item.isRequired)
          isRequired = isRequired.concat(item)
      })

      let params = {
        name: this.userName.value,
        sex: this.userSex.value,
        age: this.userAge.value,
      }

      //所有字段无报警
      if (isRequired.every(this.checkEmpty)) {
        if (allForm.every(this.checkForm)) {
          this.showToast = true
          let _self = this
          setTimeout(function () {
            this.showToast = false
            _self.$router.push({ path: ele })
            setTimeout(function() {bus.$emit('page2', params)},200)
          }, 600)
        }
      }
    },
  }
}
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
