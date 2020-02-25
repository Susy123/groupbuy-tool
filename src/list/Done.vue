<template>
    <KView class="list page js_show">
        <Back title="已完成"></Back>
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
  name: 'Done',
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
