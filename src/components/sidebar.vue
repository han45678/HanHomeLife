<template>
  <div>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link class="nav-link" to="products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="add">新增產品</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style>
.sidebar-sticky{
  background-color:#333940;
}
.sidebar .nav-link{
  color: #fff;
  padding-left: 32px;
  font-size: 14px;
}
</style>