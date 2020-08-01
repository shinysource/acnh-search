import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Search from '@/views/Search.vue';
import Critters from '@/views/Critters.vue';
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: '/', redirect: '/critters/bugs'},
  { path: '*', redirect: '/critters/bugs'},
  { path: '/search', name: 'search', component: Search },
  { path: '/critters/:critterType', name: 'critters', component: Critters },
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'navbar__link--active',
});

export default router;
