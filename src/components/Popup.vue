<template>
    <KView class="popup" v-if="isShow">
        <KView class="popup-mask"></KView>
        <KView class="popup-content">
            <KInput label="姓名：" v-model="name"></KInput>
            <KInput label="电话：" v-model="phoneNo"></KInput>
            <KInput label="数量：" v-model="count"></KInput>
        </KView>
    </KView>
</template>

<script>
export default {
  name: 'Popup',
  data(){
    return {

    }
  },
}
</script>

<style lang="less">
    .popup{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 600;
        .popup-mask{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 601;
        }
        .popup-content{
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: #fff;
            z-index: 602;
        }
    }

</style>
