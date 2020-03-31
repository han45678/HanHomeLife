<template>
  <div>
    <VueHeader></VueHeader>
    <main>
      <div
        id="banner"
        style="background-image: url(https://c.pxhere.com/photos/5d/b4/kitchen_inside_modern_furniture_contemporary_domestic_lifestyle_faucet-1248463.jpg!d"
      >
        <h2>
          所有產品
          <span class="subtitle">All Products</span>
        </h2>
      </div>
      <div id="products">
        <div class="row mt-4 wrapper">
          <div
            class="item col-md-3"
            v-for="item in productsUser"
            :key="item.id"
            v-show="item.is_enabled == '1'"
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

<style lang="scss">
#banner {
  margin-top: 90px;
  height: 450px;
  background-position: 50%;
  background-size: cover;
  position: relative;
  h2 {
    color: #fff;
    position: absolute;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    font-size: 36px;
    font-family: "Noto Serif SC", serif;
    font-weight: 700;
    text-shadow: black 0.1em 0.1em 0.5em;
    .subtitle {
      width: 100%;
      display: block;
      font-family: "Noto Serif SC", serif;
      font-size: 18px;
      font-weight: 900;
      color: #d70545;
      margin-top: 10px;
      padding-top: 10px;
      &::before {
        content: "";
        display: block;
        width: 150px;
        height: 2px;
        background-color: #fff;
        position: absolute;
        top: 53px;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }
}

#products {
  padding: 30px;
  .item {
    cursor: pointer;
    padding: 30px 30px 30px 30px;
    position: relative;
    .photo {
      img {
        max-width: 100%;
      }
    }
    .category {
      font-size: 14px;
      color: #a1a1a1;
      padding: 10px 0;
    }
    .title {
      font-family: "Anton", "Pacifico", "Noto Serif SC", serif;
      font-size: 16px;
      font-weight: 600;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .price {
      padding-top: 10px;
      font-size: 20px;
      font-weight: bolder;
      color: #ff0000;
    }
    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      margin: -30px;
      background-color: rgba(0, 0, 0, 0.6);
      opacity: 0;
      transition: 0.6s;
    }
    &::after {
      content: "點我看更多";
      display: block;
      position: absolute;
      width: 150px;
      height: 150px;
      line-height: 150px;
      background-color: #d70445;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 120px;
      opacity: 0;
      transition: 1.5s;
      text-align: center;
      color: #fff;
      font-size: 18px;
      font-family: "Noto Serif SC", serif;
      font-weight: 700;
    }
    &:hover {
      &::before {
        opacity: 1;
      }
      &::after {
        opacity: 1;
      }
    }
  }
}
</style>