import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);
// import { TabsPlugin } from 'bootstrap-vue'
// Vue.use(TabsPlugin)


Vue.config.productionTip = false;

Vue.config.errorHandler = function (e, vm, info) {
	vm.$store.commit('setError', e);
};

new Vue({
  router,
  store,
  render: function (h) { return h(App) },
}).$mount('#app')
