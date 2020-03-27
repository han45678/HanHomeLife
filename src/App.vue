<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/login">login</router-link>|
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/all";
</style>
<script>
// import '../config/dev.env.js'
export default {
  name: "App",
  // created() {
  //   const api = "https://vue-course-api.hexschool.io/api/han_vue/products";
  //   this.$http.get(api).then(response => {
  //     console.log(response.data);
  //   });
  // }
};
</script>
