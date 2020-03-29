<template>
  <div>
    <VueHeader></VueHeader>

    <!-- <div>
      <div v-for="(product) in $store.state.products" :key="product.id">
        <div>
          <h1>{{product.title}}</h1>
        </div>
        <div>
          <p>{{product.num}}</p>
        </div>
      </div>
    </div> -->

    <main>
      <div id="banner">
        <div class="text">
          <h1><span>HAN</span>居家生活</h1>
        </div>
        <div class="item">
          <img
            src="https://cdn.pixabay.com/photo/2020/01/23/02/29/dining-table-4786765_960_720.jpg"
            alt="HAN居家生活"
          />
        </div>
      </div>
      <div id="GasFryer" class="product_carousel wrapper">
        <h2>氣炸鍋 <span class="subtitle">Gas fryer</span></h2>
        <div class="item">
          <a href="">
            <div class="photo">
              <img
                src="https://d.ecimg.tw/items/DMAG5EA900AEOT0/000001_1575951205.jpg"
              />
            </div>
            <div class="title">
              <h3>
                科帥大容量5.5L 氣炸鍋 AF606空炸鍋 液晶觸控氣炸鍋 氣炸鍋
                雙鍋+超值12件8吋烘培組
              </h3>
            </div>
            <div class="original">原價<span>$</span>3990</div>
            <div class="price">售價<span>$</span>2880</div>
          </a>
        </div>
        <div class="item">
          <a href="">
            <div class="photo">
              <img
                src="https://d.ecimg.tw/items/DMAG5EA900AEOT0/000001_1575951205.jpg"
              />
            </div>
            <div class="title">
              <h3>
                科帥大容量5.5L 氣炸鍋 AF606空炸鍋 液晶觸控氣炸鍋 氣炸鍋
                雙鍋+超值12件8吋烘培組
              </h3>
            </div>
            <div class="original">原價<span>$</span>3990</div>
            <div class="price">售價<span>$</span>2880</div>
          </a>
        </div>
        <div class="item">
          <a href="">
            <div class="photo">
              <img
                src="https://d.ecimg.tw/items/DMAG5EA900AEOT0/000001_1575951205.jpg"
              />
            </div>
            <div class="title">
              <h3>
                科帥大容量5.5L 氣炸鍋 AF606空炸鍋 液晶觸控氣炸鍋 氣炸鍋
                雙鍋+超值12件8吋烘培組
              </h3>
            </div>
            <div class="original">原價<span>$</span>3990</div>
            <div class="price">售價<span>$</span>2880</div>
          </a>
        </div>
        <div class="item">
          <a href="">
            <div class="photo">
              <img
                src="https://d.ecimg.tw/items/DMAG5EA900AEOT0/000001_1575951205.jpg"
              />
            </div>
            <div class="title">
              <h3>
                科帥大容量5.5L 氣炸鍋 AF606空炸鍋 液晶觸控氣炸鍋 氣炸鍋
                雙鍋+超值12件8吋烘培組
              </h3>
            </div>
            <div class="original">原價<span>$</span>3990</div>
            <div class="price">售價<span>$</span>2880</div>
          </a>
        </div>
        <!-- <div class="item" v-for="item in $store.state.products" :key="item.id">
          <div class="photo">
            <img :src="item.imageUrl" />
          </div>
          <div class="title">{{ item.title }}</div>
          <div class="original">{{ item.origin_price }}</div>
          <div class="price">{{ item.price }}</div>
        </div> -->
      </div>
      <!--優惠-->
      <div id="oven" class="product_carousel wrapper">
        <h2>烤箱 <span class="subtitle">Gas fryer</span></h2>
        <div class="item">
          <a href="">
            <div class="photo">
              <img
                src="https://d.ecimg.tw/items/DMAG5EA900AEOT0/000001_1575951205.jpg"
              />
            </div>
            <div class="title">
              <h3>
                科帥大容量5.5L 氣炸鍋 AF606空炸鍋 液晶觸控氣炸鍋 氣炸鍋
                雙鍋+超值12件8吋烘培組
              </h3>
            </div>
            <div class="original">原價<span>$</span>3990</div>
            <div class="price">售價<span>$</span>2880</div>
          </a>
        </div>
        <div class="item">
          <a href="">
            <div class="photo">
              <img
                src="https://d.ecimg.tw/items/DMAG5EA900AEOT0/000001_1575951205.jpg"
              />
            </div>
            <div class="title">
              <h3>
                科帥大容量5.5L 氣炸鍋 AF606空炸鍋 液晶觸控氣炸鍋 氣炸鍋
                雙鍋+超值12件8吋烘培組
              </h3>
            </div>
            <div class="original">原價<span>$</span>3990</div>
            <div class="price">售價<span>$</span>2880</div>
          </a>
        </div>
        <div class="item">
          <a href="">
            <div class="photo">
              <img
                src="https://d.ecimg.tw/items/DMAG5EA900AEOT0/000001_1575951205.jpg"
              />
            </div>
            <div class="title">
              <h3>
                科帥大容量5.5L 氣炸鍋 AF606空炸鍋 液晶觸控氣炸鍋 氣炸鍋
                雙鍋+超值12件8吋烘培組
              </h3>
            </div>
            <div class="original">原價<span>$</span>3990</div>
            <div class="price">售價<span>$</span>2880</div>
          </a>
        </div>
        <div class="item">
          <a href="">
            <div class="photo">
              <img
                src="https://d.ecimg.tw/items/DMAG5EA900AEOT0/000001_1575951205.jpg"
              />
            </div>
            <div class="title">
              <h3>
                科帥大容量5.5L 氣炸鍋 AF606空炸鍋 液晶觸控氣炸鍋 氣炸鍋
                雙鍋+超值12件8吋烘培組
              </h3>
            </div>
            <div class="original">原價<span>$</span>3990</div>
            <div class="price">售價<span>$</span>2880</div>
          </a>
        </div>
      </div>
      <!--關於-->
      <div id="juicer" class="product_carousel wrapper">
        <h2>果汁機 <span class="subtitle">Gas fryer</span></h2>
        <div class="item">
          <a href="">
            <div class="photo">
              <img
                src="https://d.ecimg.tw/items/DMAG5EA900AEOT0/000001_1575951205.jpg"
              />
            </div>
            <div class="title">
              <h3>
                科帥大容量5.5L 氣炸鍋 AF606空炸鍋 液晶觸控氣炸鍋 氣炸鍋
                雙鍋+超值12件8吋烘培組
              </h3>
            </div>
            <div class="original">原價<span>$</span>3990</div>
            <div class="price">售價<span>$</span>2880</div>
          </a>
        </div>
        <div class="item">
          <a href="">
            <div class="photo">
              <img
                src="https://d.ecimg.tw/items/DMAG5EA900AEOT0/000001_1575951205.jpg"
              />
            </div>
            <div class="title">
              <h3>
                科帥大容量5.5L 氣炸鍋 AF606空炸鍋 液晶觸控氣炸鍋 氣炸鍋
                雙鍋+超值12件8吋烘培組
              </h3>
            </div>
            <div class="original">原價<span>$</span>3990</div>
            <div class="price">售價<span>$</span>2880</div>
          </a>
        </div>
        <div class="item">
          <a href="">
            <div class="photo">
              <img
                src="https://d.ecimg.tw/items/DMAG5EA900AEOT0/000001_1575951205.jpg"
              />
            </div>
            <div class="title">
              <h3>
                科帥大容量5.5L 氣炸鍋 AF606空炸鍋 液晶觸控氣炸鍋 氣炸鍋
                雙鍋+超值12件8吋烘培組
              </h3>
            </div>
            <div class="original">原價<span>$</span>3990</div>
            <div class="price">售價<span>$</span>2880</div>
          </a>
        </div>
        <div class="item">
          <a href="">
            <div class="photo">
              <img
                src="https://d.ecimg.tw/items/DMAG5EA900AEOT0/000001_1575951205.jpg"
              />
            </div>
            <div class="title">
              <h3>
                科帥大容量5.5L 氣炸鍋 AF606空炸鍋 液晶觸控氣炸鍋 氣炸鍋
                雙鍋+超值12件8吋烘培組
              </h3>
            </div>
            <div class="original">原價<span>$</span>3990</div>
            <div class="price">售價<span>$</span>2880</div>
          </a>
        </div>
      </div>
      <!--營運時間-->
      <div id="cutter" class="product_carousel wrapper">
        <h2>刀具 <span class="subtitle">Gas fryer</span></h2>
        <div class="item">
          <a href="">
            <div class="photo">
              <img
                src="https://d.ecimg.tw/items/DMAG5EA900AEOT0/000001_1575951205.jpg"
              />
            </div>
            <div class="title">
              <h3>
                科帥大容量5.5L 氣炸鍋 AF606空炸鍋 液晶觸控氣炸鍋 氣炸鍋
                雙鍋+超值12件8吋烘培組
              </h3>
            </div>
            <div class="original">原價<span>$</span>3990</div>
            <div class="price">售價<span>$</span>2880</div>
          </a>
        </div>
        <div class="item">
          <a href="">
            <div class="photo">
              <img
                src="https://d.ecimg.tw/items/DMAG5EA900AEOT0/000001_1575951205.jpg"
              />
            </div>
            <div class="title">
              <h3>
                科帥大容量5.5L 氣炸鍋 AF606空炸鍋 液晶觸控氣炸鍋 氣炸鍋
                雙鍋+超值12件8吋烘培組
              </h3>
            </div>
            <div class="original">原價<span>$</span>3990</div>
            <div class="price">售價<span>$</span>2880</div>
          </a>
        </div>
        <div class="item">
          <a href="">
            <div class="photo">
              <img
                src="https://d.ecimg.tw/items/DMAG5EA900AEOT0/000001_1575951205.jpg"
              />
            </div>
            <div class="title">
              <h3>
                科帥大容量5.5L 氣炸鍋 AF606空炸鍋 液晶觸控氣炸鍋 氣炸鍋
                雙鍋+超值12件8吋烘培組
              </h3>
            </div>
            <div class="original">原價<span>$</span>3990</div>
            <div class="price">售價<span>$</span>2880</div>
          </a>
        </div>
        <div class="item">
          <a href="">
            <div class="photo">
              <img
                src="https://d.ecimg.tw/items/DMAG5EA900AEOT0/000001_1575951205.jpg"
              />
            </div>
            <div class="title">
              <h3>
                科帥大容量5.5L 氣炸鍋 AF606空炸鍋 液晶觸控氣炸鍋 氣炸鍋
                雙鍋+超值12件8吋烘培組
              </h3>
            </div>
            <div class="original">原價<span>$</span>3990</div>
            <div class="price">售價<span>$</span>2880</div>
          </a>
        </div>
      </div>
      <router-view></router-view>
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
  methods: {},
  created() {
    this.$store.dispatch("getAllProduct");
  }
};
</script>

<style scoped lang="scss">
main {
  margin-top: 90px;
  #banner {
    width: 100%;
    height: calc(100vh - 90px);
    overflow: hidden;
    position: relative;
    .text {
      width: 320px;
      height: 320px;
      position: absolute;
      z-index: 1;
      border: 10px double #fff;
      display: flex;
      align-items: center;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      h1 {
        width: 100%;
        font-size: 64px;
        color: #fff;
        font-weight: 900;
        font-family: "Noto Serif SC", serif;
        text-align: center;
        text-shadow: black 0.1em 0.1em 0.5em;
        span {
          display: block;
          font-size: 100px;
          color: #fff;
          font-family: "Pacifico", "Noto Serif SC", serif;
          text-align: center;
        }
      }
    }
    .item {
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        min-width: 100%;
        min-height: 100vh;
      }
    }
  }
  .product_carousel {
    padding: 50px 0;
    display: flex;
    flex-wrap: wrap;
    h2 {
      width: 100%;
      font-family: "Noto Serif SC", serif;
      font-size: 36px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 50px;
      position: relative;
      ::before {
        content: "";
        display: block;
        width: 150px;
        height: 1px;
        background-color: #000;
        position: absolute;
        top: 52.5px;
        left: 0;
        right: 0;
        margin: auto;
      }
      .subtitle {
        width: 100%;
        display: block;
        font-family: "Noto Serif SC", serif;
        font-size: 18px;
        font-weight: 900;
        color: #d70545;
        margin-top: 10px;
        padding-top: 10px;
      }
    }
    .item {
      width: 20%;
      margin: 0 2.5%;
      a {
        text-decoration: none;
        .photo {
          img {
            width: 100%;
          }
        }
        .title {
          h3 {
            color: #000;
            font-family: "Anton", "Pacifico", "Noto Serif SC", serif;
            font-size: 16px;
          }
        }
        .original {
          font-family: "Anton", "Noto Serif SC", serif;
          font-size: 16px;
          font-weight: 600;
          color: #696969;
          text-align: right;
          text-decoration: line-through;
        }
        .price {
          font-family: "Anton", "Pacifico", "Noto Serif SC", serif;
          font-size: 24px;
          font-weight: 700;
          text-align: right;
          color: #e80000;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  main {
    #banner {
      .text {
        width: 220px;
        height: 220px;
        h1 {
          font-size: 42px;
          span {
            font-size: 66px;
          }
        }
      }
      .item {
        img {
          left: -85%;
        }
      }
    }
    .product_carousel {
      .item {
        width: 40%;
        margin: 5%;
      }
    }
  }
}
</style>
