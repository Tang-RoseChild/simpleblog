import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/index.vue'
import Register from '../views/Register/index.vue'
// import Ledgers from '../views/SellerLedgers/index.vue'
// import CreateLedger from '../views/CreateLedger/index.vue'
// import Nav from '../views/Nav/index.vue'
import BlogUpload from '../views/Blog/upload.vue'
import BlogList from '../views/Blog/list.vue'
import BlogDetail from '../views/Blog/detail.vue'
import Demo from '../views/compdemo/demo.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/demo', component: Demo },
    // { path: '/create', component: CreateLedger, meta: {requireLogin: true} },
    { path: '/login', component: Login },
    // { path: '/list', component: Ledgers, meta: {requireLogin: true} },
    // { path: '/nav', component: Nav },
    { path: '/register', component: Register },
    { path: '*', component: Login },
    { path: '/blog/upload', component: BlogUpload, meta: {requireLogin: true} },
    { path: '/blog/list', component: BlogList, meta: {requireLogin: true} },
    { path: '/blog/:id', name: 'blog-info', component: BlogDetail, meta: {requireLogin: true} }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('to meta, ', to, ' from >>>> ', from)
  console.log('store.getters ', store.getters.isLogined)
  if (from.path === '/' && to.path === '/') {
    if (store.getters.isLogined) {
      next('/blog/list')
    }
  } else {
    if (to.meta.requireLogin) {
      if (store.getters.isLogined) {
        next()
      } else {
        next('/login')
      }
    } else {
      next()
    }
  }
})

export default {router}
