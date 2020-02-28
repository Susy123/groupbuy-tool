<template>
    <KView class="create-buy page js_show">
        <h1 class="page__title">
            创建自己的团购
        </h1>
        <KInput label="团购标题：" v-model="buyTitle" clearable></KInput>
        <KInput label="团购地点：" v-model="buyAddress" clearable></KInput>
        <KInput label="团购最低数量：" v-model="buyNeedNum" clearable></KInput>
        <KInput label="提货时间：" v-model="takeTime" clearable></KInput>
        <KInput label="截止时间：" v-model="deadline" clearable></KInput>
        <KInput label="产品描述：" v-model="productDesc" clearable></KInput>
        <KInput label="产品配图：" :disabled="true"></KInput>
        <KView class="">
            <KView class="weui-uploader__input-box add-img"></KView>
            <KView class="clear-both"></KView>
        </KView>
        <KInput label="团购群二维码：" :disabled="true"></KInput>
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
      buyNeedNum: '',
      takeTime: '',
      deadline: '',
      productDesc: ''
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
