<template>
  <KView class="detail page js_show">
      <Back title="产品详情"></Back>
      <KView class="product-swiper">
          <KSwiper
                  :indicator-dots="true"
                  :circular="true"
                  :autoplay="true"
                  :duration="500"
                  :interval="2000"
          >
              <KSwiperItem
                      v-for="(item,index) in productImgSrc"
                      :key="index" >
                  <img :src="item">
    <!--              <KView>{{item}}</KView>-->
              </KSwiperItem>
          </KSwiper>
      </KView>
      <KView class="abstract-info">
          <KView class="price inline-block">¥ {{price}}元/份</KView>
          <KView class="buynumber inline-block">已团 {{buyNum}}</KView>
          <KView class="neednumber inline-block">需团 {{needNum}}</KView>
          <KView class="title">{{title}}</KView>
      </KView>
      <KView class="space-line"></KView>
      <GroupHead></GroupHead>
      <KView class="space-line"></KView>
      <KView class="import-info">
          <KInput label="截止时间：" :disabled="true" v-model="deadline"></KInput>
          <KInput label="提货地点：" :disabled="true" v-model="takeAddr"></KInput>
          <KInput label="提货时间：" :disabled="true" v-model="takeTime"></KInput>
      </KView>
      <KView class="space-line"></KView>
      <KFlex class="info-tab">
          <KFlexItem>
          <KView class="tab-item"
                 :class="{active:activeTab==='detail'}" @click="activeTab='detail'">
              产品详情
          </KView></KFlexItem>
          <KFlexItem>
          <KView class="tab-item"
                 :class="{active:activeTab==='member'}" @click="activeTab='member'">
              已团成员
          </KView></KFlexItem>
      </KFlex>
      <KView class="detail-info" v-if="activeTab==='detail'">
          <KView class="product-desc">{{productDesc}}</KView>
          <KView v-for="(item,index) in productImgSrc" :key="index">
              <img :src="item">
          </KView>
          加入团购群，了解更多实时信息：
          <KView><img :src="qrCodeSrc"></KView>
      </KView>
      <KView class="group-member" v-if="activeTab==='member'">
          <KFlex class="member-item" v-for="(member, index) in members" :key="index">
              <KFlexItem>{{index+1}}.&nbsp;&nbsp;&nbsp;&nbsp;<img :src="member.avator"></KFlexItem>
              <KFlexItem>{{member.name}}</KFlexItem>
              <KFlexItem>参团时间：{{member.buyTime}}</KFlexItem>
          </KFlex>
      </KView>
      <KView class="placeholder"></KView>
      <KView class="buy-area">
          <KButton  @click="clickBuy" :type="btnType">{{btnLabel}}</KButton>
      </KView>
      <KView class="popup" v-if="isShow">
          <KView class="popup-mask" @click="isShow=false"></KView>
          <KView class="popup-content">
              <KInput label="姓名：" v-model="name" placeholder="填写团购人姓名" clearable></KInput>
              <KInput label="电话：" v-model="phoneNo" placeholder="填写团购人电话" clearable></KInput>
              <KInput label="数量：" v-model="count" placeholder="填写团购数量" clearable></KInput>
              <KButtonArea direction="horizontal">
                  <KButton size="mini" type="primary" @click="confirmBuy">确定</KButton>
                  <KButton size="mini" type="warn" @click="isShow=false">取消</KButton>
              </KButtonArea>
          </KView>
      </KView>
  </KView>
</template>

<script>
import Vue from 'vue'
import Back from '../components/Back.vue'
import GroupHead from '../components/GroupHead.vue'


export default Vue.extend({
  name: 'Detail',
  components: { Back, GroupHead },
  data() {
    return {
      price: '33.8',
      title: '大台农芒果5斤 超级甜超级好吃超级新鲜一定要买！买它买它买它买它买它买它买它买它买它买它买它买它买它买它买它买它买它买它',
      buyNum: 8,
      needNum: 10,
      deadline: '2020-02-25 18:00:00',
      takeTime: '2020-02-26 14:00:00',
      takeAddr: 'xx路xx号鳯南小区东门',
      // indicatorDots: true,
      // circularFlag: true,
      // autoplay: true,
      duration: 500,
      interval: 2000,
      productDesc: '上次的芒果大家反馈都不错，所以应广大群众要求再次开团。保证最新鲜，没有经销商，所以不用赚差价，只为给美邻们带来最好的口感。2月26号下午送到小区门口。快来参团吧！',
      productImgSrc: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582538005359&di=0c495488afac6c5f71dc6a9451b0be69&imgtype=0&src=http%3A%2F%2Fimg3.tbcdn.cn%2Ftfscom%2Fi4%2F1910146537%2FTB2KfkifR8lpuFjSspaXXXJKpXa_%2521%25211910146537.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=854515629,1712400383&fm=26&gp=0.jpg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4266975422,86767469&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582635455176&di=d5d39d03619a1a19d3bd66088ec2eccf&imgtype=jpg&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2F0b46f21fbe096b63c85563cd0c338744eaf8acda.jpg'
      ],
      qrCodeSrc: 'https://mp.weixin.qq.com/wxopen/basicprofile?action=get_qrcode&type=1&openid=oaGpr5RPtwsUCwxowe6T9b9KGfSQ&use_path=1&path=pages%2Fhome%2Findex&token=209933650&lang=zh_CN',
      isBuy: false,
      isShow: false,
      name: '',
      phoneNo: '',
      count: '',
      activeTab: 'detail',
      members: [
        { name: '猫斯斯', buyTime: '12:00', avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582832835915&di=565646c1183ff052d0ad2df0144b44a9&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201410%2F09%2F20141009224754_AswrQ.jpeg' },
        { name: '卡诗', buyTime: '13:05', avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582832882921&di=7ff4f6a218545e4da994607267237576&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F25%2F20180425000646_fsmLS.thumb.700_0.jpeg' },
      ],
    }
  },
  methods: {
    changeItem() {
      console.log(this.current)
    },
    clickBuy() {
      if (!this.isBuy) {
        this.isShow = true
      } else {
        this.buyNum = Number(this.buyNum) - Number(this.count)
        this.isBuy = false
      }
    },
    confirmBuy() {
      // isBuy 为 false -> true
      this.isBuy = !this.isBuy
      this.buyNum = Number(this.buyNum) + Number(this.count)
      this.isShow = false
    },
  },
  computed: {
    btnLabel() {
      return this.isBuy ? '取消' : '参团'
    },
    btnType(){
      return this.isBuy ? 'warn' : 'primary'
    }
  },
})
</script>

<style lang="less">
    .detail{
        h1{
            margin: 20px 20px;
        }
        .inline-block{
            display: inline-block;
        }
        .product-swiper{
            height: 300px;
            .wx-comp-swiper{
                height: 300px;
            }
            img{
                height: 100%;
                width: 100%;
            }
        }
        .weui-swiper.weui-swiper-wrapper{
            height: 300px;
            img{
                height: 100%;
                width: 100%;
            }
        }
        .abstract-info{
            padding: 10px 16px;
            .price{
                color: #FA5151;
                font-size: 26px;
                font-weight: bold;
                width: 50%;
            }
            .buynumber{
                color: #42b983;
                width: 25%;
                text-align: end;
            }
            .neednumber{
                color: #FBB737;
                width: 25%;
                text-align: end;
            }
            .title{
                color: #273849;
                display: -webkit-box;
                overflow: hidden;
                font-size: 18px;
                font-weight: bold;
                /* line-height: 20px; */
                text-overflow: ellipsis;
                word-wrap: break-word;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }
        }
        .info-tab{
            text-align: center;
            .tab-item{
                padding: 10px 0;
            }
            .tab-item.active{
                border-bottom: 2px solid #42b983;
            }
        }
        .detail-info{
            margin: 5px;
            img{
                width: auto;
                height: auto;
                max-width: 100%;
                max-height: 100%;
            }
        }
        .group-member{
            margin: 5px;
            .member-item{
                height: 40px;
                margin-top: 10px;
                img{
                    width: 40px;
                    height: 40px;
                    max-width: 100%;
                    max-height: 100%;
                    border-radius: 3px;
                    vertical-align: middle;
                }
                .weui-flex__item{
                    line-height: 40px;
                }
            }
        }
        .buy-area{
            z-index: 500;
            position: fixed;
            bottom: 0;
            width: 100%;
            padding: 5px;
            background: white;
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
