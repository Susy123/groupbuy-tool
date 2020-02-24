<template>
    <KView class="list page js_show">
        <Back></Back>
        <h1 class="list-title">我发起的</h1>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <KView class="placeholder"></KView>
    </KView>
</template>

<script>
import Product from '../components/Product.vue'
import Back from '../components/Back.vue'

export default {
  name: 'Created',
  components: { Product, Back },
}
</script>

<style lang="less">
    .list{
        .list-title{
            margin: 20px 20px;
        }
    }

</style>
