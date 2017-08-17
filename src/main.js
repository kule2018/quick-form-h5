import Vue from 'vue';

import VeeValidate from 'vee-validate';

import '@/styles/form.css';
import '@/styles/global.css';

import axios from 'axios';

import App from './App';
import router from './router';
import Adapter from './utils/adapter';
import Share from './utils/share';


import '@/styles/global.css';
import '@/styles/animate.css';

Vue.prototype.$axios = axios;
Vue.use(VeeValidate);

//兼容pc
Adapter.compatiblePC();
Share.init();

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
