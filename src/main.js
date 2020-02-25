import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import KboneUI from 'kbone-ui'
import 'kbone-ui/lib/weui/weui.css'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

Vue.prototype.globalVar = {
  navbar: true
}

sync(store, router)

Vue.use(KboneUI)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
