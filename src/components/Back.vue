<template>
    <KView class="go-back">
        <span class="iconfont icon-back" @click="clickBack"></span>
        {{title}}
    </KView>
</template>

<script>
export default {
  name: 'Back',
  props: ['title'],
  methods: {
    clickBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="less">
.go-back{
    font-size: 20px;
    padding: 0 10px 10px;
    position: sticky;
    top: 0;
    background-color: white;
    border-bottom: 1px solid #EDEDED;
    z-index: 500;
    .icon-back{
        float: left;
        margin-right: 10px;
        font-size: 20px;
    }
    .page-head{

    }
}
</style>
