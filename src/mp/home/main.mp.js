import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import App from '../../App.vue'
import store from '../../store'
import Home from '../../home/Index.vue'
import KboneUI from 'kbone-ui'
import 'kbone-ui/lib/weui/weui.css'
import New from '../../new/Index.vue'
import My from '../../my/Index.vue'
import Detail from '../../detail/Index.vue'
import Collect from '../../list/Collect.vue'
import OnGoing from '../../list/OnGoing.vue'
import Done from '../../list/Done.vue'
import Created from '../../list/Created.vue'

import '../../assets/iconfont/iconfont.css'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/(home|index)?',
    name: 'Home',
    component: Home,
  }, {
    path: '/index.html',
    name: 'HomeHtml',
    component: Home,
  }, {
    path: '/new',
    name: 'New',
    component: New,
  }, {
    path: '/my',
    name: 'My',
    component: My,
  }, {
    path: '/detail',
    name: 'Detail',
    component: Detail,
  }, {
    path: '/collect',
    name: 'Collect',
    component: Collect,
  }, {
    path: '/ongoing',
    name: 'OnGoing',
    component: OnGoing,
  }, {
    path: '/done',
    name: 'Done',
    component: Done,
  }, {
    path: '/created',
    name: 'Created',
    component: Created,
  }],
})

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  Vue.config.productionTip = false

  sync(store, router)
  Vue.use(KboneUI)

  return new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
}
