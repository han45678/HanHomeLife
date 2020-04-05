<template>
  <div>
    <footer>
      <div class="wrapper">
        <ul>
          <li>
            <router-link to="/about">關於我們</router-link>
          </li>
          <li>
            <router-link to="/AllProducts">產品專區</router-link>
          </li>
          <li>
            <router-link to="/login">管理者專區</router-link>
          </li>
        </ul>
        <div id="time">
          <p>
            <span>
              <span class="footer_title">客服信箱：</span>
              <a href="han0910812144@gmail.com">han0910812144@gmail.com</a>
            </span>
          </p>
          <p>
            <span>
              <span class="footer_title">客服專線：</span>
              <a href="tel:0800-789-456">0800-789-456</a>
            </span>
          </p>
          <p>
            <span class="footer_title">服務時間：</span>
            <span>周一至周五 早上:10:00 ~ 晚上18:00</span>
          </p>
        </div>
        <div id="authority">
          <a href="http://gotoo.co/"
            >© 2018 HAN居家生活 All rights reserved. Designed by gotoo</a
          >
        </div>
      </div>
    </footer>
    <div id="shop_cart">
      <router-link to="/shopCart">
        <h2>購物車</h2>
        <svg height="512pt" viewBox="0 -31 512.00033 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m166 300.003906h271.003906c6.710938 0 12.597656-4.4375 14.414063-10.882812l60.003906-210.003906c1.289063-4.527344.40625-9.390626-2.433594-13.152344-2.84375-3.75-7.265625-5.964844-11.984375-5.964844h-365.632812l-10.722656-48.25c-1.523438-6.871094-7.617188-11.75-14.648438-11.75h-91c-8.289062 0-15 6.710938-15 15 0 8.292969 6.710938 15 15 15h78.960938l54.167968 243.75c-15.9375 6.929688-27.128906 22.792969-27.128906 41.253906 0 24.8125 20.1875 45 45 45h271.003906c8.292969 0 15-6.707031 15-15 0-8.289062-6.707031-15-15-15h-271.003906c-8.261719 0-15-6.722656-15-15s6.738281-15 15-15zm0 0"/><path d="m151 405.003906c0 24.816406 20.1875 45 45.003906 45 24.8125 0 45-20.183594 45-45 0-24.8125-20.1875-45-45-45-24.816406 0-45.003906 20.1875-45.003906 45zm0 0"/><path d="m362.003906 405.003906c0 24.816406 20.1875 45 45 45 24.816406 0 45-20.183594 45-45 0-24.8125-20.183594-45-45-45-24.8125 0-45 20.1875-45 45zm0 0"/></svg> 
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
footer {
  position: relative;
  width: 100%;
  background-color: #222222;
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    ul {
      padding: 0px 0 50px 0;
      margin-bottom: 0;
      width: calc(100% - 340px);
      li {
        display: inline;
        a {
          font-size: 20px;
          font-family: "Noto Serif SC", serif;
          line-height: 50px;
          color: #fff;
          padding: 0 30px;
          display: inline-block;
          transition: 0.6s;
          text-decoration: none;
        }
      }
    }
    #time {
      width: 340px;
      color: #fff;
      padding-top: 50px;
      padding-bottom: 100px;
      p {
        font-size: 16px;
        a {
          color: #fff;
        }
      }
    }
    #authority {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      text-align: center;
      border-top: 1px solid #ccc;
      a {
        font-size: 16px;
        font-family: "Noto Serif SC", serif;
        line-height: 50px;
        color: #fff;
      }
    }
  }
}
@media only screen and (max-width: 980px) {
  footer {
    position: relative;
    width: 100%;
    background-color: #222222;
    .wrapper {
      padding: 0 15px;
      ul {
        width: 100%;
        padding: 50px 0 0 0;
        text-align: center;
        li {
          a {
            font-size: 16px;
            line-height: 30px;
            padding: 0 15px;
          }
        }
      }
      #time {
        width: 100%;
        text-align: center;
        p {
          font-size: 14px;
        }
        span {
          display: block;
        }
      }
      #authority {
        width: 100%;
        a {
          font-size: 12px;
        }
      }
      .footer_title {
        display: block;
      }
    }
  }
}
</style>
