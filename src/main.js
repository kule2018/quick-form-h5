import Vue from 'vue';

import '@/styles/form.css';
import '@/styles/global.css';
import 'font-awesome/css/font-awesome.css';

import axios from 'axios';

import App from './App';
import router from './router';
import Adapter from './utils/adapter';
import Share from './utils/share';


import '@/styles/global.css';

Vue.prototype.$axios = axios;

//兼容pc
Adapter.compatiblePC();
Share.init();

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
