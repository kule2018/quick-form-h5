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

// Register a global custom directive called v-focus-next-on-enter
Vue.directive('focusNextOnEnter', {
  bind: function(el, {
    value
  }, vnode) {
    el.addEventListener('keyup', (ev) => {
      if (ev.keyCode === 13) {        
        let nextInput = vnode.context.$refs[value]

        if (nextInput && typeof nextInput.focus === 'function') {
          nextInput.focus()
          nextInput.select()
        } else if (nextInput && typeof nextInput.$vnode.elm.children[2].children[0].focus === 'function') {
          nextInput.$vnode.elm.children[2].children[0].focus()
          nextInput.$vnode.elm.children[2].children[0].select()
        }
      }
    })
  }
})

//兼容pc
Adapter.compatiblePC();
Share.init();

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
