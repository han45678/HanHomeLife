<template>
  <div>
    <div class="mt-5">
      <div v-for="perDay in orders" :key="perDay.id">
        <div class="details">
          <div class="item confirm">
            <span class="text-success" v-if="perDay.is_paid">已確認</span>
            <span class="text-danger" v-else>未確認</span>
          </div>
          <div class="receiver">
            <div class="item">
              <div class="title">收貨人：</div>
              <div class="content">
                {{ perDay.user.name }}
              </div>
            </div>
            <div class="item">
              <div class="title">連絡電話：</div>
              <div class="content">
                {{ perDay.user.tel }}
              </div>
            </div>
            <div class="item">
              <div class="title">電子信箱：</div>
              <div class="content">
                {{ perDay.user.email }}
              </div>
            </div>
            <div class="item">
              <div class="title">地址：</div>
              <div class="content">
                {{ perDay.user.address }}
              </div>
            </div>
            <!-- <div class="item">
              <div class="title">消費金額：</div>
              <div class="content">
                {{ item.total }}
              </div>
            </div> -->
          </div>

          <div>
            <h3>購買產品</h3>
            <div v-for="item in perDay.products" :key="item.id">
              <div>
                <img :src="item.product.imageUrl" />
              </div>
              <div>
                <div>
                  產品：
                </div>
                {{ item.product.title }}
              </div>
              <div>
                <div>
                  價格：
                </div>
                {{ item.product.price }}
              </div>
              <div>
                <div>
                  分類：
                </div>
                {{ item.product.category }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

export default {
  data() {
    return {
      orders: {},
    };
  },
  methods: {
    getOrder() {
      const url = `https://vue-course-api.hexschool.io/api/han_vue/orders`;
      this.$http.get(url).then((res) => {
        let orders = res.data.orders;

        let perDay = orders.map((data, index) => {
          let products = data.products;

          let keys = Object.keys(products).map((key) => products[key]);

          return keys;
        });

        let processOrder = orders.map((data, index) => {
          data.products = perDay[index];
          return data;
        });

        this.orders = processOrder;

        console.log(res.data.orders);
      });
    },
  },
  created() {
    //沒有執行事件觸發，務必要在下方加入created才會執行
    this.getOrder();
  },
};
</script>

<style scoped lang="scss">
.details {
  background-color: #e0e0e0;
  margin-bottom: 15px;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .receiver {
    width: calc(100% - 150px);
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 50%;
      font-size: 16px;
      display: flex;
      flex-wrap: wrap;
      line-height: 30px;

      .title {
        width: 100px;
        font-size: 16px;
        font-weight: bolder;
      }

      .content {
        width: calc(100% - 150px);
        font-size: 16px;
      }
    }
  }

  .confirm {
    text-align: center;
    padding: 0;
    width: 150px;
    font-size: 20px;
    font-weight: bolder;
  }
}

@media only screen and (max-width: 1199px) {
  .details {
    .receiver {
      width: 100%;

      .item {
        width: 100%;

        .title {
          width: 120px;
        }

        .content {
          width: calc(100% - 120px);
        }
      }
    }

    .confirm {
      width: 100%;
    }
  }
}

@media only screen and (max-width: 1199px) {
  .details {
    .receiver {
      width: 100%;

      .item {
        width: 100%;

        .title {
          width: 100%;
        }

        .content {
          width: 100%;
        }
      }
    }

    .confirm {
      width: 100%;
    }
  }
}
</style>
