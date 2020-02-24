<template>
  <KView class="detail page js_show">
      <Back></Back>
       <h1>产品详情</h1>
  </KView>
</template>

<script>
import Vue from 'vue'
import Back from '../components/Back.vue'


export default Vue.extend({
  name: 'Detail',
  components: { Back },
})
</script>

<style lang="less">
    .detail{
        h1{
            margin: 20px 20px;
        }
    }
</style>
