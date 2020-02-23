<template>
    <KView class="list page js_show">
        <h1 class="list-title">正在团购</h1>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <KView class="placeholder"></KView>
    </KView>
</template>

<script>
import Product from '../components/Product.vue'

export default {
  name: 'OnGoing',
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
