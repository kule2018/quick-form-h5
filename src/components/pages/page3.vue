<template>
  <div class="form">
    <div class="top">
      <p>*请留下联系方式</p>
      <p>有任何关于 <span>{{userData.name}}</span> 的消息我们会与你联系</p>
    </div>
    
    <div class="info">
      <v-input :props="publishName" ref="publishName" v-focus-next-on-enter="'publishPhone'"></v-input>

      <v-input :props="publishPhone" ref="publishPhone" v-focus-next-on-enter="'submit'"></v-input>

      <input v-on:click="changeRoute('/page4')" class="btn btn-primary bottomBtn" type="button" ref="submit" value="提交">
    </div>

    <v-toast :visible="showToast" :message="'提交成功'" :className="''" :position="'middle'" :iconClass="'fa fa-check'">
    </v-toast>
  </div>
</template>

<script>
import Input from '@/components/common/input'
import Toast from '@/components/common/toast'
import bus from '@/utils/bus'

export default {
  name: 'page3',
  data: () => ({
    publishName: {
      title: '姓名',
      value: '',
      isDanger: 0,
      reg: /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/,
      isRequired: true,
      placeholder: '姓名',
    },
    publishPhone: {
      title: '电话',
      value: '',
      isDanger: 0,
      reg: /^1[3|4|5|7|8]\d{9}$/,
      isRequired: true,
      placeholder: '电话',
    },
    showToast: false,

    userData: {}
  }),

  components: {
    'v-input': Input,
    'v-toast': Toast,
  },

  created() {
    bus.$on('page2', data => {this.userData = data})
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
      let allForm = [this.publishName, this.publishPhone]
      
      //必填的字段
      let isRequired = []
      allForm.map((item) => {
        if (item.isRequired)
          isRequired = isRequired.concat(item)
      })

      //所有字段无报警
      if (isRequired.every(this.checkEmpty)) {
        if (allForm.every(this.checkForm)) {
          this.userData = {
            ...this.userData,
            publish_name: this.publishName.value,
            publish_phone: this.publishPhone.value,
          }
          this.$http.get('//jiuzhu.qq.com/publish/add',{params: this.userData})
            .then(res => {
              this.userData.id = res.data.data.id
              this.showToast = true
              let _self = this

              setTimeout(function () {
                this.showToast = false
                _self.$router.push({ path: ele })
                setTimeout(function() {bus.$emit('page3', _self.userData)
                console.log(_self.userData)},200)
              }, 600)
            }, err => {
              console.log(err)
            })
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
  margin: 2rem 1rem;
  padding: 0 1rem;
  text-align: left;
  font-size: 0.6rem;
  color: #108ee9;
  border: 2px dashed #108ee9;
  border-radius: 0.5rem;
}

.info {
  width: 90%;
  margin: 2rem auto 0.43rem auto;
}
</style>
