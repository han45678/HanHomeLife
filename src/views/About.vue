<template>
  <div>
      <div v-for="(product) in $store.state.products" :key="product.id">
        <div>
          <h1>{{product.title}}</h1>
        </div>
        <div>
          <p>{{product.num}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  
}
</script>
