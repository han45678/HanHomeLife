/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueSweetalert2);
Vue.use(Vuex)

export default new Vuex.Store({
  state: { //變數
    products: [],
    pagination: {},
    productsU: [],
    product: {}
  },
  mutations: { //宣告
    SET_PRODUCT(state, productList) {
      state.products = productList;
    },
  },
  actions: { //串接
    getAllProduct({
      commit,
      dispatch,
      state
    }) {
      axios.get('https://vue-course-api.hexschool.io/api/han_vue/products')
        .then(resp => {
          console.log(resp.data.products);
          commit('SET_PRODUCT', resp.data.products);
          //this.pagination = resp.data.pagination;
        })
    },
    // getProducts({
    //   commit,
    //   dispatch,
    //   state
    // }) {
    //   const url = `https://vue-course-api.hexschool.io/api/han_vue/products?page=:page`;
    //   axios.get(url).then(resp => {
    //     //this.products = res.data.products;
    //     console.log(resp);
    //     commit('SET_PRODUCT', resp.data.products);
    //   });
    // },
    // getProduct(id, {
    //   commit,
    //   dispatch,
    //   state
    // }) {
    //   const url = `https://vue-course-api.hexschool.io/api/han_vue/product/${id}`;
    //   axios.get(url).then(resp => {
    //     //this.product = res.data.product;
    //     console.log(resp.data.product);
    //     commit('SET_PRODUCT', resp.data.product);
    //   });
    // }
  },
  getters: {

  },
  modules: {}
})