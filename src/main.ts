// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'
import router from './router/index'
import VueLazyload from 'vue-lazyload'
import './mock'

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(VueLazyload, { preLoad: 1 })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
