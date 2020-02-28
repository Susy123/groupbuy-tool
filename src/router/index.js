import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */'@/home/Index.vue')
const Detail = () => import('@/detail/Index.vue')
const My = () => import('@/my/Index.vue')
const New = () => import('@/new/Index.vue')
const Collect = () => import('@/list/Collect.vue')
const OnGoing = () => import('@/list/OnGoing.vue')
const Done = () => import('@/list/Done.vue')
const Created = () => import('@/list/Created.vue')
const HeadPage = () => import('@/list/HeadPage.vue')

Vue.use(Router)

const router = new Router({
  mode: 'hash',
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
  }, {
    path: '/head',
    name: 'HeadPage',
    component: HeadPage,
  }],
})
const mainPageList = ['Home', 'New', 'My'];
router.afterEach((to, from) => {
  if (mainPageList.indexOf(to.name) < 0) {
    document.getElementsByClassName('app__navbar')[0].style.display='none'
  } else {
    document.getElementsByClassName('app__navbar')[0].style.display=''
  }
})
export default router
