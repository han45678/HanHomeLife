<template>
  <div>
    <div class="row mt-4 mb-4 justify-content-md-center">
      <div class="col-md-8 text-right mb-4">
        <router-link to="products"><button type="button" class="btn btn-primary">回商品列表</button></router-link>
      </div>
      <div class="col-md-8 text-center mb-4">
        <h1>新增產品</h1>
      </div>
      <div class="col-md-8">
        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="title">標題</label>
            <input type="text" id="title" placeholder="請輸入標題" class="form-control" />
          </div>
          <div class="form-group col-md-6">
            <label for="category">分類</label>
            <input type="text" id="category" placeholder="請輸入分類" class="form-control" />
          </div>
          <div class="form-group col-md-6">
            <label for="price">單位</label>
            <input type="unit" id="unit" placeholder="請輸入單位" class="form-control" />
          </div>
          <div class="form-group col-md-6">
            <label for="origin_price">原價</label>
            <input type="number" id="origin_price" placeholder="請輸入原價" class="form-control" />
          </div>
          <div class="form-group col-md-6">
            <label for="price">售價</label>
            <input type="number" id="price" placeholder="請輸入售價" class="form-control" />
          </div>
          <div class="form-group col-md-12">
            <label for="price">輸入圖片網址</label>
            <input type="text" id="image" placeholder="請輸入圖片連結" class="form-control" />
          </div>
          <div class="form-group col-md-12">
            <div class="form-check">
              <input
                type="checkbox"
                true-value="1"
                false-value="0"
                id="is_enabled"
                class="form-check-input"
              />
              <label for="is_enabled" class="form-check-label">是否啟用</label>
            </div>
          </div>
          <div class="col-md-12 text-center">
            <button type="button" class="btn btn-primary">新增商品</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>