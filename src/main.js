import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import swal from 'sweetalert'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.use(VueAxios, axios)
Vue.config.productionTip = false

axios.defaults.withCredentials = true; //允許Cookies

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  //守門員
  if (to.meta.requiresAuth) {
    const api = "https://vue-course-api.hexschool.io/api/user/check";
    //admin＝讀取cookie需要
    axios.post(api).then(response => {
      console.log(response.data);
      if (response.data.success) {
        swal('登入成功');
        next();
      } else {
        /*next({
           push: '/login'
        //老師不知道為甚麼要用next去包,這裡測試還是會觸發next
         });*/
        swal('請先登入帳號');
        router.push('login')
      }
    });
  } else {
    next(); //不會被要求登入
    //如果沒有在index.js設定requiresAuth就放行通過
  }
})