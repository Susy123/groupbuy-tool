<template>
    <KView class="go-back">
        <span class="iconfont icon-back" @click="clickBack"></span>
    </KView>
</template>

<script>
export default {
  name: 'Back',
  methods: {
    clickBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="less">
.go-back{
    .icon-back{
        float: left;
        margin: 20px 10px;
        font-size: 30px;
    }
}
</style>
