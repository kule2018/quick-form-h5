import Vue from 'vue';
import Router from 'vue-router';

import hello from '@/pages/hello';
import about from '@/pages/about';
import form from '@/pages/form';
import upload from '@/pages/upload';
import share from '@/pages/share';

import button from '@/components/common/button';
import input from '@/components/common/input';
import select from '@/components/common/select';
import calender from '@/components/common/calender';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', redirect: '/hello' },
    { path: '/hello', name: 'hello', component: hello },
    { path: '/about', name: 'about', component: about },
    { path: '/form', name: 'form', component: form },
    { path: '/upload', name: 'upload', component: upload },
    { path: '/share', name: 'share', component: share },

    { path: '/button', name: 'button', component: button },
    { path: '/input', name: 'input', component: input },
    { path: '/select', name: 'select', component: select },
    { path: '/calender', name: 'calender', component: calender },
  ],
});
