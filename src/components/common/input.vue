<template>
  <label class="label">
    <span class="requiredSymbol" :class="{'hidden': !inputName.isRequired}">*</span><span>{{inputName.name}}：</span>
    <p class="control has-icon has-icon-right">
      <input type="text"
        v-model="inputName.value"
        v-on:blur="checkReg(inputName)"
        :class="{'input': true, 'is-danger': inputName.isDanger }"
        :placeholder="inputName.placeholder">
      <i v-show="inputName.isDanger" class="fa fa-warning"></i>
      <span v-show="inputName.isDanger == 1" class="help is-danger">{{ '请输入正确的' }}{{inputName.name}}</span>
      <span v-show="inputName.isDanger == 2" class="help is-danger">{{inputName.name}}{{ '不能为空' }}</span>
    </p>
  </label>
</template>

<script>
export default {
  name: 'input',
  props: {
    inputName: {
      name: '',
      value: '',
      isDanger: 0,
      reg: /^()$/,
      isRequired: false,
      placeholder: '',
    }
  },
  
  methods: {
    //检测非空
    checkEmpty: function(ele) {
      ele.isDanger =  ele.value.trim().length > 0 ? ele.isDanger : 2
      return ele.value.trim().length > 0;
    },

    //检测正则
    checkReg: function(ele) {
      if(ele.value.trim().length == 0) {
        if(ele.isRequired){
          ele.isDanger = 2
          return
        } else {
          return
        }
      }
      return ele.isDanger = !ele.reg.test(ele.value) ? 1 : 0
    },

  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.label {
  margin: 1rem 0 0.5rem 0;
}

.label span{
  line-height: 1.68rem;
  font-size: 0.6rem;
}

p {
  margin: 0 0.6rem;
  flex: 1;
}
p > span {
  line-height: 0.6rem !important;
  font-weight: 300;
}
.hidden {
  visibility: hidden;
}
</style>
