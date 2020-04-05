<template>
  <div>
    <VueHeader></VueHeader>
    <main>
      <div
        id="banner"
        style="
          background-image: url(https://c.pxhere.com/photos/a1/6d/shopping_business_retail_shopping_cart_transport_supermarket_food_purchasing-1052603.jpg!d);
        "
      >
        <h2>
          購物車
          <span class="subtitle">Shop Cart</span>
        </h2>
      </div>

      <div id="shopCart">
        <div class="wrapper">
          <div class="item" v-for="item in shopCart" :key="item.id">
            <div class="photo">
              <img :src="item.product.imageUrl" />
            </div>
            <div class="text">
              <div class="title">{{ item.product.title }}</div>
              <div class="category">分類：{{ item.product.category }}</div>
              <div class="qty">數量：{{ item.qty }}</div>
              <div class="price">NT ＄{{ item.product.price }}</div>
            </div>
            <div class="delete">
              <button type="button" class="btn btn-danger">刪除</button>
            </div>
          </div>
          <div class="final_total text-right">
            總共金額：{{ sum.final_total }}
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
    VueFooter,
  },
  data() {
    return {
      shopCart: {},
      sum: {},
    };
  },
  computed: {},
  methods: {
    test() {
      console.log(this.enabled);
    },
    getShopCart() {
      const url = `https://vue-course-api.hexschool.io/api/han_vue/cart`;
      this.$http.get(url).then((res) => {
        this.shopCart = res.data.data.carts;
        this.sum = res.data.data;
        console.log(res.data.data);
      });
    },
  },
  created() {
    this.getShopCart();
  },
};
</script>

<style scoped lang="scss">
#shopCart {
  .wrapper {
    padding: 50px 50px;
    .item {
      border-bottom: 1px solid #ccc;
      padding-bottom: 30px;
      margin-bottom: 30px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .photo {
        width: 200px;
        padding-right: 50px;
        img {
          width: 100%;
        }
      }
      .text {
        width: calc(100% - 250px - 60px);
        .title {
          font-size: 20px;
          font-weight: 900;
          font-family: "Noto Serif SC", serif;
          margin-bottom: 15px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .category {
          font-size: 16px;
          font-weight: 900;
          font-family: "Noto Serif SC", serif;
          //color: #a1a1a1;
          margin-bottom: 5px;
        }
        .qty {
          font-size: 16px;
          font-weight: 900;
          font-family: "Noto Serif SC", serif;
          margin-bottom: 5px;
        }
        .price {
          font-size: 16px;
          font-weight: 900;
          font-family: "Noto Serif SC", serif;
          margin-bottom: 5px;
        }
      }
      .delete {
        width: 60px;
        text-align: center;
      }
    }
    .final_total {
      font-size: 24px;
      font-weight: 900;
      font-family: "Noto Serif SC", serif;
      color: #d70545;
    }
  }
}
@media only screen and (max-width: 768px) {
  #shopCart {
    .wrapper {
      .item {
        align-items: initial;
        .photo {
          width: 115px;
          text-align: center;
          padding-right: 15px;
          img {
            max-width: 80px;
            margin: auto;
          }
        }
        .text {
          width: calc(100% - 115px);
          .title {
            font-size: 14px;
            margin-bottom: 5px;
          }
          .category {
            font-size: 12px;
            margin-bottom: 0px;
          }
          .qty {
            font-size: 12px;
            margin-bottom: 0px;
          }
          .price {
            font-size: 12px;
            margin-bottom: 0px;
          }
        }
        .delete {
          text-align: right;
          margin-top: 30px;
          width: 100%;
        }
      }
    }
  }
}
</style>
