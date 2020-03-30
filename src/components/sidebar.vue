<template>
  <div>
    <nav id="sidebar" class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link class="nav-link" to="products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="add">新增產品</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="">優惠卷</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="simulation-customer-orders">模擬訂單</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="simulation-cart">模擬購物車</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.sidebar {
  padding: 67px 0 0;
}
.sidebar-sticky {
  background-color: #333940;
}
.sidebar .nav-link {
  color: #fff;
  padding-left: 32px;
  font-size: 14px;
  line-height: 50px;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
  transition: 0.6s;
}

.sidebar .nav-link:hover {
  background-color: #ccc;
  color: #000;
}

#sidebar.active {
  display: block !important;
  padding: 142px 0 0;
}
</style>
