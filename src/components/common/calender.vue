<template>
  <div class="form">
    <div class="top">
      calender
    </div>
    <div class="info">
      <label class="label"><span class="requiredSingle">*</span>电话：</label>
      <p class="control has-icon has-icon-right">
        <input name="phone" v-model="phone" :class="{'input': true, 'is-danger': true }" type="text" placeholder="必填">
        <i v-show="true" class="fa fa-warning"></i>
        <span v-show="true" class="help is-danger">{{ 'sss' }}</span>
      </p>
    </div>
    <router-link to="/form">
      <div class="btn btn-primary bottomBtn">返回</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'calender',
    data: () => ({
      phone: '',
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
  .label {
    font-size: 0.8rem;
    margin: 1rem 0 0.5rem 0;
  }
  p {
    margin: 0.5rem 0;
    width: 90%;
  }
</style>
