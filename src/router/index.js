import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import dashboard from '../components/dashboard.vue'
import login from '../components/pages/login.vue'
import products from '../components/pages/products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: 'login'
    //避免進入沒定義的頁面(在網址列上亂打)
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }//這個網站需要登入
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/admin',
    name: 'HelloWorld',
    component: dashboard,
    children:[
      {
        path: 'products',// 前面路徑都會加上斜線,內層勿加,不然找不到
        name: 'products',
        component: products,
        meta: { requiresAuth: true },//內層需要每地都加才有用
      }
    ],
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
