<template>
  <div>
    <VueHeader></VueHeader>
    <main>
      <div
        id="banner"
        style="background-image: url(https://c.pxhere.com/photos/5d/b4/kitchen_inside_modern_furniture_contemporary_domestic_lifestyle_faucet-1248463.jpg!d"
      >
        <h2>
          刀具
          <span class="subtitle">Cutter</span>
        </h2>
      </div>
      <div id="products">
        <div class="row mt-4 wrapper">
          <div
            class="item col-md-3"
            v-for="item in productsUser"
            :key="item.id"
            v-show="item.category == '刀具' && item.is_enabled == '1'"
          >
            <div class="photo">
              <img :src="item.imageUrl" />
            </div>
            <div class="category text-center">{{item.category}}</div>
            <div class="title text-center">{{ item.title }}</div>
            <div class="price text-center">NT ＄{{ item.price }}</div>
          </div>
        </div>
      </div>
    </main>
    <VueFooter></VueFooter>
  </div>
</template>

<script>
import VueHeader from "./shared/header";
import VueFooter from "./shared/footer";

export default {
  components: {
    VueHeader,
    VueFooter
  },
  data() {
    return {
      productsUser: []
      //product: {}
    };
  },
  methods: {
    getProducts() {
      const url = `https://vue-course-api.hexschool.io/api/han_vue/products/all`;
      this.$http.get(url).then(res => {
        this.productsUser = res.data.products;
        console.log(this.productsUser);
      });
    }
    // getProduct(id) {
    //   const url = `https://vue-course-api.hexschool.io/api/han_vue/product/${id}`;
    //   this.$http.get(url).then(res => {
    //     this.product = res.data.product;
    //     console.log(res.data.product);
    //   });
    // },
    // addtoCart(id, qty = 1) {
    //   //id,qty=1 假如數量(qty)沒帶進來，會預設為１
    //   const cart = {
    //     product_id: id,
    //     qty
    //   };
    //   const url = `https://vue-course-api.hexschool.io/api/han_vue/cart`;
    //   this.$http.post(url, { data: cart }).then(res => {
    //     console.log(res.data.product);
    //   });
    // },
    // getCart() {
    //   const url = `https://vue-course-api.hexschool.io/api/han_vue/cart`;
    //   this.$http.get(url).then(res => {
    //     this.productsUser = res.data.products;
    //     //console.log(res);
    //   });
    // }
  },
  created() {
    this.getProducts();
    //this.getCart();
  }
};
</script>
