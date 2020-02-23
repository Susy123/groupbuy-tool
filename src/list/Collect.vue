<template>
    <KView class="list page js_show">
        <h1 class="list-title">我收藏的</h1>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <KView class="placeholder"></KView>
    </KView>
</template>

<script>
import Product from '../components/Product.vue'

export default {
  name: 'collect',
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
