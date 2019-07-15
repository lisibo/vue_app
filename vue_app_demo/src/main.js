// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'normalize.css'
import '@/assets/css/index.css'
import '@/assets/fonts/iconfont.css'

import HUI from 'hui'
import 'hui/dist/css/hui.min.css'
Vue.use(HUI)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)



import axios from 'axios'
import '@/permission.js'

;(function () {
  resize();
  window.onresize = function () {
    resize()
  }
  function resize() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px'
  }
})();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
