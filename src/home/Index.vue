<template>
  <KView class="page home js_show">
       <KView class="page__address">
           我在：
<!--           <img src="../assets/location.png">-->
           <span class="iconfont icon-location"></span>
           {{myAddress}}
           <KButton type="primary" class="address_btn">更换位置</KButton>
        </KView>
      <KView>
          <KView>
              <Product></Product>
              <Product></Product>
              <Product></Product>
          </KView>
      </KView>
        <KView class="other">
            <KView>附近其他团购：</KView>
        </KView>
      <KView>
          <Product></Product>
      </KView>
      <KView class="placeholder"></KView>
  </KView>
</template>

<script>
import Vue from 'vue'
import Product from '../components/Product.vue'


export default Vue.extend({
  name: 'Button',
  components: { Product },
  data(){
    return {
      myAddress: '鳯南小区'
    }
  },
  methods: {
    getUserInfo(e) {
      console.log(e)
    },
  }
})
</script>
<style lang="less">
    .page__address{
        position: sticky;
        top: 0;
        background: white;
        border-bottom: 1px solid #EDEDED;
        z-index: 500;
        padding: 20px 20px 10px;
        img {
            vertical-align: text-bottom;
            width: 20px;
            height: 20px;
        }
        .inline-block{
            display: inline-block;
        }
        .address_input{
            /*display: inline-block;*/
        }
        .address_btn{
            margin-left: 20px;
            /*display: inline-block;*/
            width: 120px;
            position: fixed;
            top: 10px;
            right: 20px;
        }
        .weui-label {
            width: 50px;
        }
        .weui-flex {
            padding: 8px 0 0 0 !important;
        }
    }
    .other{
        margin: 18px;
    }
    .placeholder{
        width: 100%;
        height: 60px;
    }
</style>
