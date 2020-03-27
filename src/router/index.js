import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import dashboard from '../components/dashboard.vue'
import login from '../components/pages/login.vue'
import products from '../components/pages/products.vue'
import add from '../components/pages/add.vue'

Vue.use(VueRouter)

const routes = [{
    path: '*',
    redirect: 'login'
    //避免進入沒定義的頁面(在網址列上亂打)
  },
  {
    path: '/',
    name: 'home',
    component: Home,
  },

  //後台管理者登入
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/admin',
    name: 'admin',
    component: dashboard,
    meta: {
      requiresAuth: true
    }, //內層需要每地都加才有用
    children: [
      {
        path: 'products', // 前面路徑都會加上斜線,內層勿加,不然找不到
        name: 'products',
        component: products,
        meta: {
          requiresAuth: true
        }, //內層需要每地都加才有用
      },
      {
        path: 'add', // 前面路徑都會加上斜線,內層勿加,不然找不到
        name: 'add',
        component: add,
        meta: {
          requiresAuth: true
        }, //內層需要每地都加才有用
      }
    ],
  }
]

const router = new VueRouter({
  routes
})

export default router