import Vue from 'vue';

import VeeValidate from 'vee-validate';

import '@/assets/form.css';

import axios from 'axios';

import App from './App';
import router from './router';
import Adapter from './utils/adapter';

import '@/styles/global.css';


Vue.prototype.$axios = axios;
Vue.use(VeeValidate);

//兼容pc
Adapter.compatiblePC();

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
