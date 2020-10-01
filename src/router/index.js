import Vue from 'vue'
import VueRouter from 'vue-router'
import NavMenu from '../components/NavMenu.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/navmenu',
    name: 'NavMenu',
    component: NavMenu
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/top',
    name: 'Top',
    component: () => import('../components/Top.vue')
  },
  {
    path: '/label',
    name: 'Label',
    component: () => import('../views/label_duo_view.vue')
  },
  {
    path: '/promotion',
    name: 'Promotion',
    component: () => import('../views/promotion_duo_view.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes: routes
})

export default router
