import Vue from "vue/dist/vue.esm";
import Router from "vue-router";

import {
   Login
} from '../components/login'

import {
   Show
} from '../components/smartHome'

Vue.use(Router)

const routes = [
    {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Show',
    component: Show
  },

  { path: "*", redirect: "/" }
]

export default new Router({
  mode: "history",
  routes: routes
});

