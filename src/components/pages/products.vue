<template>
  <div>
    <div class="text-right mt-4">
      <router-link to="add">
        <button type="button" class="btn btn-primary mt-3">新增產品</button>
      </router-link>
    </div>
    <!-- <div class="row mt-4">
      <div class="col-md-4" v-for="(item, key) in products" :key="item.id">
        <h3>分類：</h3><p>{{ item.category }}</p>
        <h3>產品名稱：</h3><p>{{ item.title }}</p>
        <h3>原價：</h3><p>{{ item.origin_price }}</p>
        <h3>售價：</h3><p>{{ item.price }}</p>
        <h3>是否啟用：</h3><p><span v-if="item.is_enabled" class="text-success">啟用</span><span v-else class="text-danger">未啟用</span></p>
        <h3>數量：</h3><p>{{ item.num }}{{ item.unit }}</p>
        <button type="button" class="btn btn-info mr-2">編輯</button>
        <button type="button" class="btn btn-danger" @click="removeTodo(key)">刪除</button>
      </div>
    </div>-->
    <table class="table mt-4">
      <thead>
        <th>分類</th>
        <th width="50%">產品名稱</th>
        <th class="text-right">原價</th>
        <th class="text-right">售價</th>
        <th class="text-center">是否啟用</th>
        <th>數量</th>
        <th class="text-center">編輯</th>
      </thead>
      <tbody>
        <tr v-for="(item) in products" :key="item.id">
          <td data-th="分類：">{{ item.category }}</td>
          <td data-th="產品名稱：">{{ item.title }}</td>
          <td data-th="原價：" class="text-right">{{ item.origin_price }}</td>
          <td data-th="售價：" class="text-right">{{ item.price }}</td>
          <td data-th="是否啟用：" class="text-center">
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else class="text-danger">未啟用</span>
          </td>
          <td data-th="數量：">{{ item.num }}{{ item.unit }}</td>
          <td class="text-center">
            <button type="button" class="btn btn-info mr-2">編輯</button>
            <button type="button" class="btn btn-danger">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- <div id="edit">
      <div id="edit_content">
        <div class="row">
          <div class="col-12">
            <h2 class="text-center">修改資料</h2>
          </div>
          <div class="col-12">
            
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      isNew: false
    };
  },
  methods: {
    getProducts() {
      const api = "https://vue-course-api.hexschool.io/api/han_vue/products";
      this.$http.get(api).then(response => {
        console.log(response.data);
        this.products = response.data.products;
      });
    },
    openModel() {
      
    },
    removeProducts() {
      const api =
        "https://vue-course-api.hexschool.io/api/han_vue/admin/product/:product_id";
      this.$http
        .get(api)
        .then(response => {
          console.log(response);
          if (response.data.success) {
            this.getProduct(); //重新讀取列表
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    //沒有執行事件觸發，務必要在下方加入created才會執行
    this.getProducts();
  }
};
</script>

<style scoped lang="scss">
  /*#edit {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1031;
    #edit_content {
      background-color: #fff;
      max-width: 600px;
      max-height: 500px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      padding: 15px;
    }
  }*/
  table thead {
    font-size: 18px;
  }
  table tbody tr td {
    font-size: 16px;
    vertical-align: middle !important;
  }

  @media only screen and (max-width: 768px) {
    table thead {
      display: none;
    }
    table tbody tr {
      border-bottom: 5px double #585858;
    }
    table tbody tr td,
    table tbody tr td.text-center {
      float: left;
      width: 100%;
      text-align: right !important;
    }
    table tbody tr td:before {
      content: attr(data-th);
      width: 100%;
      display: block;
      text-align: left;
      font-weight: bolder;
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 480px) {
    table tbody tr td:before {
      margin-bottom: 15px;
    }
  }
</style>