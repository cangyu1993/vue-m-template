// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '@/axios'
import store from '@/store';
import jquery from 'jquery'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'typeface-roboto'
Vue.config.productionTip = false



Vue.use(MuseUI);
Vue.prototype.$axios = axios;
Vue.prototype.$ = jquery;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
