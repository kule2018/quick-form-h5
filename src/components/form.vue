<template>
  <div class="form">
    <div class="top">
      Form表单
    </div>
    <div class="info">
      <label class="label"><span class="requiredSingle">*</span>邮箱：</label>
      <p class="control has-icon has-icon-right">
        <input name="email" v-model="email" v-validate.initial="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
        <i v-show="errors.has('email')" class="fa fa-warning"></i>
        <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
      </p>
    </div>
    <div class="btn">发布</div>
  </div>
</template>

<script>
export default {
  name: 'form',
  data: () => ({
    email: '',
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
