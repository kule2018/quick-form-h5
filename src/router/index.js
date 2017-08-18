import Vue from 'vue';
import Router from 'vue-router';

import hello from '@/pages/hello';
import about from '@/pages/about';
import form from '@/pages/form';
import upload from '@/pages/upload';
import share from '@/pages/share';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', redirect: '/hello' },
    { path: '/hello', name: 'hello', component: hello },
    { path: '/about', name: 'about', component: about },
    { path: '/form', name: 'form', component: form },
    { path: '/upload', name: 'upload', component: upload },
    { path: '/share/:id', name: 'share', component: share, props: true },
  ],
});
