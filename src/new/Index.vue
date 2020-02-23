<template>
    <KView class="create-buy page js_show">
        <h1 class="page__title">
            创建自己的团购
        </h1>
        <KInput label="团购标题：" v-model="buyTitle"></KInput>
        <KInput label="团购地点：" v-model="buyAddress"></KInput>
        <KInput label="团购最低数量：" v-model="buyNeedNum"></KInput>
        <KInput label="产品配图："></KInput>
        <KView class="">
            <KView class="weui-uploader__input-box add-img"></KView>
            <KView class="clear-both"></KView>
        </KView>
        <KInput label="团购群二维码："></KInput>
        <KView class="">
            <KView class="weui-uploader__input-box add-img"></KView>
            <KView class="clear-both"></KView>
        </KView>
        <KButton type="primary" class="confirm_btn">提交</KButton>
        <KView class="placeholder"></KView>
    </KView>
</template>

<script>
import Vue from 'vue'


export default Vue.extend({
  name: 'Button',
  data(){
    return {
      buyTitle: '',
      buyAddress: '',
      buyNeedNum: '1'
    }
  },
  methods: {
    getUserInfo(e) {
      console.log(e)
    }
  }
})
</script>
<style lang="less">
    .create-buy{
        margin: 20px 10px;
        .weui-label {
            width: 125px;
        }
        .add-img{
            left: 16px;
        }
    }
    .clear-both{
        clear: both;
    }
</style>
