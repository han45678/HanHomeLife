<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">商品後台</a>
      <input
        class="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="signout">登出</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
.navbar-brand{
  font-size: 1.8rem;
}
.navbar .form-control {
    margin-left: 15px;
}
</style>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    signout() {
      const api = "https://vue-course-api.hexschool.io/logout";

      this.$http.post(api).then((response) => {
        console.log(response.data);
        if (response.data.success){
            this.$router.push('/login')
        }
      });
    }
  }
}
</script>