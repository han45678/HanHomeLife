<template>
  <div>
    <div class="text-right mt-4">
      <router-link to="add"><button type="button" class="btn btn-primary">新增產品</button></router-link>
    </div>
    <table class="table mt-4">
      <thead>
        <th>分類</th>
        <th>產品名稱</th>
        <th class="text-right">原價</th>
        <th class="text-right">售價</th>
        <th class="text-center">是否啟用</th>
        <th>數量</th>
        <th>編輯</th>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td data-th="分類：">{{ item.category }}</td>
          <td data-th="產品名稱：" width="50%">{{ item.title }}</td>
          <td data-th="原價：" class="text-right">{{ item.origin_price }}</td>
          <td data-th="售價：" class="text-right">{{ item.price }}</td>
          <td data-th="是否啟用：" class="text-center">
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else class="text-danger">未啟用</span>
          </td>
          <td data-th="數量：">{{ item.num }}{{ item.unit }}</td>
          <td>
            <button type="button" class="btn btn-primary">編輯</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts() {
      const api = "https://vue-course-api.hexschool.io/api/han_vue/products";
      this.$http.get(api).then(response => {
        console.log(response.data);
        this.products = response.data.products;
      });
    }
  },
  created() {
    //沒有執行事件觸發，務必要在下方加入created才會執行
    this.getProducts();
  }
};
</script>

<style scoped>
  table thead{
    font-size: 18px;
  }
  table tbody tr td{
    font-size: 16px;
    vertical-align: middle !important;
  }

  @media only screen and (max-width: 768px) {
    table thead{
      display: none;
    }
    table tbody tr{
      border-bottom:5px double #585858;
    }
    table tbody tr td,table tbody tr td.text-center{
      float: left;
      width: 100%;
      text-align: right !important;
      
    }
    table tbody tr td:before{
      content: attr(data-th);
      width: 100%;
      display: block;
      text-align: left;
      font-weight: bolder;
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 480px) {
    table tbody tr td:before{
      margin-bottom: 15px;
    }
  }
</style>