import Vue from "vue/dist/vue.esm";
import Router from "vue-router";
import HelloWorld from '@/components/HelloWorld'
import {
   Show
} from '../components/smartHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ceva',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Show',
      component: Show
    }
  ]
})
