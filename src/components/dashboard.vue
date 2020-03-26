<template>
  <div>
    <navbar/><!--<=通常是寫<navbar></navbar> 但也能縮寫成這樣-->
    <div class="container-fluid">
      <div class="row">
        <sidebar/> <!--<=通常是寫<sidebar></sidebar> 但也能縮寫成這樣-->
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
  body{
    background-color: #5d5d5d;
  }
  .sidebar .nav-link{
    line-height: 50px;
    font-size: 16px;
    border-bottom: 1px solid #ccc;
  }
  *{
    color: #fff;
  }
</style>

<script>
import sidebar from './sidebar';
import navbar from './navbar';

export default{
    components: {
        sidebar,
        navbar
    }
}
</script>
