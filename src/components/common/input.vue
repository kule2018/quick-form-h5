<template>
  <div class="form">
    <div class="top">
      input
    </div>
    <div class="info">
      <label class="label">
        <span class="requiredSymbol">*</span><span>姓名：</span>
        <p class="control has-icon has-icon-right">
          <input name="mobile" v-model.lazy="mobile" :class="{'input': true, 'is-danger': checkReg(regList.Mobile, mobile) }" type="text" placeholder="姓名">
          <i v-show="checkReg(regList.Mobile, mobile)" class="fa fa-warning"></i>
          <span v-show="checkReg(regList.Mobile, mobile)" class="help is-danger">{{ '请输入正确的电话号码' }}</span>
        </p>
      </label>
      <label class="label">
        <span class="requiredSymbol">*</span><span>密码：</span>
        <p class="control has-icon has-icon-right">
          <input name="mobile" v-model.lazy="mobile" :class="{'input': true, 'is-danger': checkReg(regList.Mobile, mobile) }" type="text" placeholder="密码">
          <i v-show="checkReg(regList.Mobile, mobile)" class="fa fa-warning"></i>
          <span v-show="checkReg(regList.Mobile, mobile)" class="help is-danger">{{ '请输入正确的电话号码' }}</span>
        </p>
      </label>
      <label class="label">
        <span class="requiredSymbol">*</span><span>年龄：</span>
        <p class="control has-icon has-icon-right">
          <input name="mobile" v-model.lazy="mobile" :class="{'input': true, 'is-danger': checkReg(regList.Mobile, mobile) }" type="text" placeholder="确认密码">
          <i v-show="checkReg(regList.Mobile, mobile)" class="fa fa-warning"></i>
          <span v-show="checkReg(regList.Mobile, mobile)" class="help is-danger">{{ '请输入正确的电话号码' }}</span>
        </p>
      </label>
      <label class="label">
        <span class="requiredSymbol">*</span><span>电话：</span>
        <p class="control has-icon has-icon-right">
          <input name="mobile" v-model.lazy="mobile" :class="{'input': true, 'is-danger': checkReg(regList.Mobile, mobile) }" type="text" placeholder="电话">
          <i v-show="checkReg(regList.Mobile, mobile)" class="fa fa-warning"></i>
          <span v-show="checkReg(regList.Mobile, mobile)" class="help is-danger">{{ '请输入正确的电话号码' }}</span>
        </p>
      </label>
      <label class="label">
        <span class="requiredSymbol">*</span><span>邮箱：</span>
        <p class="control has-icon has-icon-right">
          <input name="mail" v-model.lazy="mail" v-on:blur="checkReg(regList.Mail, mail, 'mail')" :class="{'input': true, 'is-danger': state.mailIsDanger }" type="text" placeholder="邮箱">
          <i v-show="state.mailIsDanger" class="fa fa-warning"></i>
          <span v-show="state.mailIsDanger" class="help is-danger">{{ '请输入正确的邮箱' }}</span>
        </p>
      </label>

    </div>
    <router-link to="/form">
      <div class="btn btn-primary bottomBtn">返回</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'input',
  data: () => ({
    mobile: '',
    mail: '',
    state: {
      mailIsDanger: false,
    },
    
    //常用正则表
    regList: {
      ImgCode: /^[0-9a-zA-Z]{4}$/,
      SmsCode: /^\d{4}$/,
      MailCode: /^\d{4}$/,
      UserName: /^[\w|\d]{4,16}$/,
      Password: /^[\w!@#$%^&*.]{6,16}$/,
      Mobile: /^1[3|4|5|7|8]\d{9}$/,
      RealName: /^[\u4e00-\u9fa5|·]{2,16}$|^[a-zA-Z|\s]{2,20}$/,
      BankNum: /^\d{10,19}$/,
      Money: /^([1-9]\d*|[0-9]\d*\.\d{1,2}|0)$/,
      Answer: /^\S+$/,
      Mail: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    },


  }),
  computed: {

  },
  methods: {

    // 断言函数
    assert: (condition, message) => {
      if(!condition){
        console.error('[va-warn]:' + message)
      }
    },

    //检测非空
    checkEmpty: (ruleValue, vaForm) => {
      return vaForm.value.trim() ? true : false
    },

    //检测正则
    checkReg: (ruleValue, value, ele) => {
      if(ele == 'mail'){
        console.log(this)


      }
        // this.mailIsDanger = !ruleValue.test(value) ? true : false
        // return this.mailIsDanger
    },

    //检测数字区间
    checkLimit: (ruleValue, vaForm, va) => {
      var value = vaForm.value
      return ((+value >= ruleValue[0]) && (+value <= ruleValue[1])) ? true : false
    },

    //检测相等
    checkEqual: (ruleValue, vaForm, va) => {
      var target = va.forms[ruleValue]
      return target.value === vaForm.value ? true : false
    },

    //检测字符长度
    checkCharLength: (ruleValue, vaForm, va) => {
      var length = vaForm.value.length
      return ((+length >= ruleValue[0]) && (+length <= ruleValue[1])) ? true : false
    },

  },

  watch: {
   
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
  margin: 1rem auto;
  text-align: center;
  font-size: 1rem;
  color: #108ee9;
}

.info {
  width: 90%;
  margin: 0.43rem auto;
}

.label {
  margin: 1rem 0 0.5rem 0;
}

.label span{
  line-height: 1.68rem;
  font-size: 0.6rem;
}

p {
  margin: 0 0.5rem;
  flex: 1;
}
p > span {
  line-height: 0.6rem !important;
  font-weight: 300;
}
</style>
