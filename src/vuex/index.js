import Vue from "vue/dist/vue.esm";
import Vuex from "vuex";
Vue.use(Vuex);

import SensorStore from "./stores/SensorStore.js";


export default new Vuex.Store({
  modules: {
    SensorStore
  }
});

