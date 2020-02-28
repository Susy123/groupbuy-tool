<template>
    <KView class="group-head">
        <img :src="headSrc" @click="clickHead">
        <KView class="inline-block">
            <KView class="group-head-name">{{headName}}</KView>
            <KView class="group-num">发起次数：{{groupNum}}</KView>
        </KView>
        <div class="head-icon">
            <span class="iconfont icon-phone-fill" @click="clickPhone"></span>
            <span class="iconfont icon-pengyouquan-copy" @click="clickPengyouquan"></span>
            <span class="iconfont icon-weixin-copy" @click="clickWeixin"></span>
        </div>
        <KDialog
                v-model="diaShow"
                :buttons="diaBtn"
                title="提示"
                :desc="diaDesc"
        />
    </KView>
</template>

<script>
export default {
  name: 'GroupHead',
  data() {
    return {
      headSrc: 'http://img0.imgtn.bdimg.com/it/u=4024515741,3748791895&fm=26&gp=0.jpg',
      headName: '柠檬酱w',
      groupNum: 2,
      diaShow: false,
      diaBtn: [
        {
          text: '确定',
          click: () => {
            console.log('确定')
            this.diaShow = false
          }
        }
      ],
      diaDesc: ''
    }
  },
  methods: {
    clickPhone() {
      this.diaDesc = '拨打电话给 xxx xxxx xxxx'
      this.diaShow = true
    },
    clickPengyouquan() {
      this.diaDesc = '分享朋友圈'
      this.diaShow = true
    },
    clickWeixin() {
      this.diaDesc = '分享微信'
      this.diaShow = true
    },
    clickHead() {
      this.$router.push('/head')
    }
  }
}
</script>

<style lang="less">
    .group-head{
        height: 60px;
        padding: 3px 16px 13px;
        img{
            border-radius: 6px;
            width: 60px;
            height: 60px;
            max-width: 100%;
            max-height: 100%;
            vertical-align: bottom;
            margin-right: 10px;
        }
        .group-head-name{
            line-height: 40px;
        }
        .head-icon{
            float: right;
            .iconfont{
                font-size: 40px;
                color: #07C160;
                margin-left: 10px;
            }
            .icon-pengyouquan-copy {
                color: #FBB737;
                font-size: 43px;
            }
        }
    }

</style>
