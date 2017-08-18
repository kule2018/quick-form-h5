import Vue from 'vue';
import Router from 'vue-router';

import hello from '@/components/hello';
import about from '@/components/about';
import button from '@/components/button';
import form from '@/components/form';
import upload from '@/components/upload';
import share from '@/pages/share';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', redirect: '/hello' },
    { path: '/hello', name: 'hello', component: hello },
    { path: '/about', name: 'about', component: about },
    { path: '/button', name: 'button', component: button },
    { path: '/form', name: 'form', component: form },
    { path: '/upload', name: 'upload', component: upload },
    { path: '/share/:id', name: 'share', component: share, props: true },
  ],
});
