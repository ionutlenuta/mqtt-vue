import Vue from "vue/dist/vue.esm";
import BootstrapVue from 'bootstrap-vue'
import { Layout } from "./components/shared";
import store from './vuex'
import router from './router'
import vSelect from 'vue-select'


Vue.use(BootstrapVue);
Vue.component('v-select', vSelect);

Vue.config.productionTip = false

new Vue({
  render: h => h(Layout),
  router:router,
  components: { Layout },
  template: "<Layout/>",
  store:store
}).$mount('#app')
