<template>
    <KView class="product">
        <KView class="left">
            <img :src="imgSrc" @click="clickProduct">
        </KView>
        <KView class="right">
            <KView class="title">{{productTitle}}</KView>
            <KView class="time">截止时间：2020-02-25 18:00:00</KView>
            <KView class="time">提货时间：2020-02-26 14:00:00</KView>
            <KFlex>
                <KFlexItem><KView class="total">已团：{{total}}</KView></KFlexItem>
                <KFlexItem><KView class="need">需团：{{needNum}}</KView></KFlexItem>
            </KFlex>
            <KFlex>
                <KFlexItem><KView class="price">¥ 33.8元/份</KView></KFlexItem>
                <KFlexItem>
                    <KButton class="buy-btn"
                             @click.self="clickBuy" :type="btnType">{{btnLabel}}</KButton>
                </KFlexItem>
            </KFlex>
        </KView>
        <KView class="popup" v-if="isShow">
            <KView class="popup-mask" @click="isShow=false"></KView>
            <KView class="popup-content">
                <KInput label="姓名：" v-model="name" placeholder="填写团购人姓名"></KInput>
                <KInput label="电话：" v-model="phoneNo" placeholder="填写团购人电话"></KInput>
                <KInput label="数量：" v-model="count" placeholder="填写团购数量"></KInput>
                <KButtonArea direction="horizontal">
                    <KButton size="mini" type="primary" @click="confirmBuy">确定</KButton>
                    <KButton size="mini" type="warn" @click="isShow=false">取消</KButton>
                </KButtonArea>
                <KView class="placeholder"></KView>
            </KView>
        </KView>
    </KView>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      // eslint-disable-next-line global-require
      imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582538005359&di=0c495488afac6c5f71dc6a9451b0be69&imgtype=0&src=http%3A%2F%2Fimg3.tbcdn.cn%2Ftfscom%2Fi4%2F1910146537%2FTB2KfkifR8lpuFjSspaXXXJKpXa_%2521%25211910146537.jpg',//require('../data/img/product1.jpeg'),
      isBuy: false,
      total: 8,
      needNum: 10,
      productTitle: '大台农芒果5斤 超级甜超级好吃超级新鲜一定要买！买它买它买它',
      name: '',
      phoneNo: '',
      count: '1',
      isShow: false
    }
  },
  methods: {
    clickBuy() {
      if (!this.isBuy) {
        this.isShow = true
      } else {
        this.total = Number(this.total) - Number(this.count)
        this.isBuy = false
      }
    },
    confirmBuy() {
      // isBuy 为 false -> true
      this.isBuy = !this.isBuy
      this.total = Number(this.total) + Number(this.count)
      this.isShow = false
    },
    clickProduct() {
      // alert('click img to router')
      this.$router.push('/detail')
    }
  },
  computed: {
    btnLabel() {
      return this.isBuy ? '取消' : '参团'
    },
    btnType(){
      return this.isBuy ? 'warn' : 'primary'
    }
  },
}
</script>

<style lang="less">
    .product{
        height: 180px;
        padding-top: 10px;
        width: 96%;
        margin-left: 2%;
        box-shadow: 0px 5px 15px 0px #cfc9ca;
        margin-top: 20px;
        border-radius: 10px;
        .left{
            width: 30%;
            height: 100%;
            float: left;
            padding-left: 10px;
            img{
                width: 95%;
                margin-top: 5px;
            }
        }
        .right{
            .title{
                color: #273849;
                display: -webkit-box;
                overflow: hidden;
                font-size: 18px;
                font-weight: bold;
                /*line-height: 20px;*/
                text-overflow: ellipsis;
                word-wrap: break-word;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2
            }
            .time{
                font-size: 13px;
                color: gray;
            }
            .price{
                color: #FA5151;
                font-size: 20px;
                font-weight: bold;
            }
            .weui-flex{
                padding: 0;
            }
            .buy-btn{
                display: inline-block;
                width: 100px;
            }
            .weui-btn_warn[type=warn], .weui-btn_warn {
                color: white;
                background-color: #FA5151;
            }
            .total{
                color: #42b983;
            }
            .need{
                color: #FBB737;
            }
        }
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
            .weui-btn-area {
                margin: 0px 16px 8px;
            }
        }
    }

</style>
