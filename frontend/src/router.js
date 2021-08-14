import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Assistance from './views/Assistance.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      props: { pageType: 'home' },
      exact: true,
    },
    {
      path: '/assistance',
      name: 'Assistance',
      component: Assistance,
      props: { pageType: 'assistance' },
      exact: true,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      props: { pageType: 'contact' },
      exact: true,
    },
  ],
});
