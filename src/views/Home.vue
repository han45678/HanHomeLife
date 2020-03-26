<template>
<div id="wrapper">
  <main>
    <div class="banner">
      <img src="https://tecshopping.com/images/event-banner3.jpg" alt="">
    </div>
    <div id="hot">
      <h2>熱門商品</h2>
      <div class="content">
        <div class="item">
          <img src="https://cw1.tw/CW/images/fck/F1450079513946.jpg" alt="">
        </div>
        <div class="item">
          <img src="https://cw1.tw/CW/images/fck/F1450079513946.jpg" alt="">
        </div>
        <div class="item">
          <img src="https://cw1.tw/CW/images/fck/F1450079513946.jpg" alt="">
        </div>
      </div>
      
    </div>
  </main>
  
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped lang="scss">
  #wrapper{
    max-width: 1366px;
    margin: auto;
    .banner{
      img{
        width: 100%;
      }
    }
    #hot{
      h2{
        margin: 15px 0;
      }
      .content{
        display: flex;
        justify-content: space-between;
        .item{
          width: 32%;
          img{
            width: 100%;
          }
        }
        
      }
    }
  }
</style>
