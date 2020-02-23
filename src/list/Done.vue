<template>
    <KView class="list page js_show">
        <h1 class="list-title">已结束的团购</h1>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <KView class="placeholder"></KView>
    </KView>
</template>

<script>
import Product from '../components/Product.vue'

export default {
  name: 'Done',
  components: { Product },
}
</script>

<style lang="less">
    .list{
        .list-title{
            margin: 20px 20px;
        }
    }

</style>
