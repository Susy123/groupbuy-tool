<template>
    <KView class="popup-buy" v-if="isShow">
        <KView class="popup-mask" @click="isShow=false"></KView>
        <KView class="popup-content">
            <KInput label="姓名：" v-model="name" placeholder="填写团购人姓名" clearable></KInput>
            <KInput label="电话：" v-model="phoneNo" placeholder="填写团购人电话" clearable></KInput>
            <KInput label="数量：" v-model="count" placeholder="填写团购数量" clearable></KInput>
            <KButtonArea direction="horizontal">
                <KButton size="mini" type="primary" @click="confirmBuy">确定</KButton>
                <KButton size="mini" type="warn" @click="isShow=false">取消</KButton>
            </KButtonArea>
            <KView class="placeholder"></KView>
        </KView>
    </KView>
</template>

<script>
export default {
  name: 'Popup',
  data(){
    return {
      name: '',
      phoneNo: '',
      count: '',
      isShow: false
    }
  },
}
</script>

<style lang="less">
    .popup-buy{
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
        .weui-btn-area {
            margin: 0px 16px 8px;
        }
    }

</style>
