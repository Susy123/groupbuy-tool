<template>
  <KView class="page home js_show">
       <KView class="page__address">
           <KFlex>
               <KFlexItem>
                   <KInput label="我在：" v-model="myAddress" class="address_input"></KInput>
               </KFlexItem>
               <KFlexItem>
                   <KButton type="primary" class="address_btn">更换位置</KButton>
               </KFlexItem>
           </KFlex>
        </KView>
      <KView>
          <KView>
              <Product @click="clickProduct"></Product>
              <Product></Product>
              <Product></Product>
          </KView>
      </KView>
        <KView class="other">
            <KView>附近其他团购：</KView>
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
    clickProduct() {
      alert('router')
    }
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
        /*padding: 20px;*/
        .address_input{
            /*display: inline-block;*/
        }
        .address_btn{
            display: inline-block;
            width: 150px;
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
