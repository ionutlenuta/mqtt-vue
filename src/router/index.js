import Vue from "vue/dist/vue.esm";
import Router from "vue-router";

import {
   Show
} from '../components/smartHome'

Vue.use(Router)

const routes = [
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

