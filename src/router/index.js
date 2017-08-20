import Vue from 'vue';
import Router from 'vue-router';

import hello from '@/components/pages/hello';
import about from '@/components/pages/about';
import form from '@/components/pages/form';
import form2 from '@/components/pages/form2';
import upload from '@/components/pages/upload';
import share from '@/components/pages/share';

import button from '@/components/common/button';
import select from '@/components/common/select';
import calender from '@/components/common/calender';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', redirect: '/hello' },
    { path: '/hello', name: 'hello', component: hello },
    { path: '/about', name: 'about', component: about },
    { path: '/form', name: 'form', component: form },
    { path: '/form2', name: 'form2', component: form2 },    
    { path: '/upload', name: 'upload', component: upload },
    { path: '/share', name: 'share', component: share },

    { path: '/button', name: 'button', component: button },
    { path: '/select', name: 'select', component: select },
    { path: '/calender', name: 'calender', component: calender },
  ],
});
