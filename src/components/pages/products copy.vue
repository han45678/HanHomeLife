<template>
  <div>
    <div class="text-right mt-4">
      <router-link to="add">
        <button type="button" class="btn btn-primary mt-3">新增產品</button>
      </router-link>
    </div>
    <table class="table mt-4">
      <thead>
        <th>縮圖</th>
        <th>分類</th>
        <th width="50%">產品名稱</th>
        <th class="text-right">原價</th>
        <th class="text-right">售價</th>
        <th class="text-center">是否啟用</th>
        <th>數量</th>
        <th class="text-center">編輯</th>
      </thead>
      <tbody>
        <tr v-for="item in $store.state.products" :key="item.id">
          <td class="photo" data-th="縮圖：">
            <img :src="item.imageUrl" />
          </td>
          <td class="classification" data-th="分類：">{{ item.category }}</td>
          <td class="name" data-th="產品名稱：">{{ item.title }}</td>
          <td class="original text-right" data-th="原價：">
            {{ item.origin_price }}
          </td>
          <td class="price text-right" data-th="售價：">{{ item.price }}</td>
          <td class="enable text-center" data-th="是否啟用：">
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else class="text-danger">未啟用</span>
          </td>
          <td class="quantity" data-th="數量：">
            {{ item.num }}{{ item.unit }}
          </td>
          <td class="operating text-center">
            <button type="button" class="btn btn-info mr-2" @click="edit()">
              編輯
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="removeProducts(item.id)"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div id="edit">
      <div id="edit_content">
        <div class="row">
          <div class="col-md-12 text-center mb-1">
            <h1>編輯產品</h1>
          </div>
          <div class="col-md-12">
            <div class="form-row">
              <div class="form-group col-md-12 text-right">
                <div class="form-check">
                  <input
                    type="checkbox"
                    true-value="1"
                    false-value="0"
                    id="is_enabled"
                    class="form-check-input"
                  />
                  <label for="is_enabled" class="form-check-label"
                    >是否啟用</label
                  >
                </div>
              </div>
              <div class="form-group col-md-12">
                <label for="title">標題</label>
                <input
                  type="text"
                  id="title"
                  placeholder="請輸入標題"
                  class="form-control"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="category">分類</label>
                <input
                  type="text"
                  id="category"
                  placeholder="請輸入分類"
                  class="form-control"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="price">單位</label>
                <input
                  type="unit"
                  id="unit"
                  placeholder="請輸入單位"
                  class="form-control"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="origin_price">原價</label>
                <input
                  type="number"
                  id="origin_price"
                  placeholder="請輸入原價"
                  class="form-control"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="price">售價</label>
                <input
                  type="number"
                  id="price"
                  placeholder="請輸入售價"
                  class="form-control"
                />
              </div>
              <div class="form-group col-md-12">
                <label for="price">輸入圖片網址</label>
                <input
                  type="text"
                  id="image"
                  placeholder="請輸入圖片連結"
                  class="form-control"
                />
              </div>
              <div class="form-group col-md-12 text-center">
                <img src="" />
              </div>
              <div class="col-md-12 text-center">
                <button type="button" class="btn btn-primary">確定修改</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    removeProducts(id) {
      const self = this;
      const api = `https://vue-course-api.hexschool.io/api/han_vue/admin/product/${id}`;
      this.$http
        .delete(api)
        .then(response => {
          console.log(response);
          if (response.data.success) {
            self.$swal("刪除成功！", "商品已刪除", "info");
            this.$store.dispatch("getAllProduct");
            this.getProduct(); //重新讀取列表
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    openModel() {
      document.getElementById("edit").classList.toggle("active");
    },
    edit() {
      //this.$router.push("edit");
    }
  },
  created() {
    //沒有執行事件觸發，務必要在下方加入created才會執行
    this.$store.dispatch("getAllProduct");
  }
};
</script>

<style scoped lang="scss">
#edit {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1030;
  display: none;
  &.active {
    display: block;
  }
  #edit_content {
    max-width: 500px;
    height: 565px;
    background: #fff;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    padding: 30px;
  }
}
.photo img {
  max-width: 50px;
  margin: auto;
}
table thead {
  font-size: 18px;
}
table tbody tr td {
  font-size: 16px;
  vertical-align: middle !important;
}

@media only screen and (max-width: 1420px) {
  table {
    margin-top: 0 !important;
  }
  table thead {
    display: none;
  }
  table tbody {
    display: flex;
    flex-wrap: wrap;
    tr {
      width: 30%;
      margin: 30px 1.5%;
      padding: 15px;
      box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);
      border-radius: 15px;
      display: flex;
      flex-wrap: wrap;
      td,
      td.text-center {
        width: 100%;
        text-align: right !important;
        &::before {
          content: attr(data-th);
          width: 100%;
          display: block;
          text-align: left;
          font-weight: bolder;
          font-size: 18px;
        }
      }
    }
  }
  .name {
    order: 1;
    border: none;
    text-align: center !important;
    font-size: 24px;
    padding-top: 0;
    &::before {
      display: none;
    }
  }
  .photo {
    order: 2;
    text-align: center !important;
    img {
      width: 100%;
      max-width: 250px;
    }
    &::before {
      display: none;
    }
  }
  .price,
  .classification,
  .original,
  .enable,
  .quantity,
  .operating {
    padding: 5px;
    order: 3;
  }
}
@media only screen and (max-width: 1024px) {
  table tbody {
    tr {
      width: 47%;
    }
  }
}
@media only screen and (max-width: 768px) {
  main {
    padding-top: 67px;
  }
  table tbody tr td:before {
    margin-bottom: 15px;
  }
  table tbody {
    tr {
      width: 100%;
    }
  }
}
</style>
