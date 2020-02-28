<template>
  <KView class="page my js_show">
      <KView class="my-info">
<!--          <img src="../data/img/avatar.png" class="avatar">-->
          <span class="iconfont icon-iconzhucetouxiang"></span>
          <div class="name">子维</div>
          <KFlex class="buy-info">
              <KFlexItem>
                  <KView class="flex-info" @click="clickItem(1)">
                      <KView>
<!--                          <img src="./collect.png">-->
                          <span class="iconfont icon-like"></span>
                      </KView>
                      <KView>收藏</KView>
                  </KView>
              </KFlexItem>
              <KFlexItem>
                  <KView class="flex-info" @click="clickItem(2)">
                  <KView>
<!--                      <img src="./going.png">-->
                      <span class="iconfont icon-deliver"></span>
                  </KView>
                  <KView>正在团</KView>
                  </KView>
              </KFlexItem>
              <KFlexItem>
                  <KView class="flex-info" @click="clickItem(3)">
                      <KView>
<!--                          <img src="./history.png">-->
                          <span class="iconfont icon-goods"></span>
                      </KView><KView>已截单</KView>
                  </KView>
              </KFlexItem>
              <KFlexItem>
                  <KView class="flex-info" @click="clickItem(4)">
                      <KView>
<!--                          <img src="./new.png" :style="{width:'28px'}">-->
                          <span class="iconfont icon-friendadd"></span>
                      </KView><KView>我发起</KView>
                  </KView>
              </KFlexItem>
          </KFlex>
      </KView>
      <KView class="info-list">
          <KView><KInput label="姓名" :disabled="!isEditing" v-model="myName"></KInput> </KView>
          <KView><KInput label="电话" :disabled="!isEditing" v-model="phoneNo"></KInput> </KView>
          <KView><KInput label="地址" :disabled="!isEditing" v-model="myAddress"></KInput> </KView>
          <KButtonArea direction="horizontal">
              <KButton size="mini" type="primary" @click="clickModify">{{modifyBtnLabel}}</KButton>
              <KButton size="mini" type="warn" v-if="isEditing" @click="clickCancel">取消</KButton>
          </KButtonArea>
      </KView>
      <KView class="about-list">
          <KView class="about-item" @click="clickAbout">
              关于
              <span class="iconfont icon-right"></span>
          </KView>
          <KView class="about-item" @click="clickFeedBack">
              反馈
              <span class="iconfont icon-right"></span>
          </KView>
      </KView>
      <KView class="placeholder"></KView>
      <KDialog
              v-model="diaShow"
              :buttons="diaBtn"
              :title="diaTitle"
              :desc="diaDesc"
      />
      <KView class="popup" v-if="isShow">
          <KView class="popup-mask" @click="isShow=false"></KView>
          <KView class="popup-content">
              <KInput label="反馈意见：" v-model="suggestion" clearable></KInput>
              <KButtonArea direction="horizontal">
                  <KButton size="mini" type="primary" @click="submitSuggestion">确定</KButton>
                  <KButton size="mini" type="warn" @click="isShow=false">取消</KButton>
              </KButtonArea>
              <KView class="placeholder"></KView>
          </KView>
      </KView>
  </KView>
</template>

<script>
import Vue from 'vue'


export default Vue.extend({
  name: 'Button',
  data() {
    return {
      myName: '李子维',
      phoneNo: '15852560707',
      myAddress: 'xx区xx路鳯南小区',
      isEditing: false,
      diaShow: false,
      diaTitle: '',
      diaDesc: '',
      diaBtn: [
        {
          text: '确定',
          click: () => {
            console.log('确定')
            this.diaShow = false
          }
        }
      ],
      suggestion: '',
      isShow: false
    }
  },
  methods: {
    getUserInfo(e) {
      console.log(e)
    },
    clickModify() {
      if (this.isEditing) {
        // 如果是正在编辑中，则点击这个按钮是提交
        this.isEditing = false //TODO 提交结束后重新置为false
      } else {
        // 如果不是正在编辑中，则设置input为可编辑
        this.isEditing = true
      }
    },
    clickCancel() {
      //TODO 从服务器拉取数据显示后将input置为不可编辑
      this.isEditing = false
    },
    clickItem(index) {
      if (index === 1) {
        this.$router.push('/collect')
      }
      if (index === 2) {
        this.$router.push('/ongoing')
      }
      if (index === 3) {
        this.$router.push('/done')
      } if (index === 4) {
        this.$router.push('/created')
      }
    },
    clickAbout() {
      this.diaTitle = '关于'
      this.diaDesc = '拼拼和团团是一款用于协助自定义团购的非盈利小工具。提供团购的信息检索、展示和收集能力，方便大家自发团购。使用后，就再也不用在微信群里费力地接龙和翻聊天记录了.'
      this.diaShow = true
    },
    clickFeedBack() {
      this.isShow = true
    },
    submitSuggestion() {
      this.diaTitle = '感谢反馈'
      this.diaDesc = '您的意见我们已经收到，感谢您的热心反馈，我们会继续努力。'
      this.diaShow = true
    }
  },
  computed: {
    modifyBtnLabel() {
      return this.isEditing ? '确定' : '编辑'
    }
  }
})
</script>
<style lang="less">
    .my{
        .my-info{
            /*margin-top: 20px;*/
            display: flex;
            flex-direction: column;
            align-items: center;
            border-bottom: 10px solid #f5f5f5;
            padding-bottom: 15px;
            .iconfont{
                color: #07C160;
                font-size: 30px;
            }
            .icon-iconzhucetouxiang{
                color: #EDEDED;
                font-size: 80px;
            }
            .avatar {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                display: block;
                overflow: hidden;
            }
            .name{
                color: #293539;
                font-size: 20px;
                margin-top: 5px;
                position: relative;
                display: block;
                overflow: hidden;
            }
            .buy-info{
                width: 100%;
                margin-top: 20px;
                .flex-info{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img{
                        width: 32px;
                        height: 32px;
                    }
                }
            }
        }
        .info-list{
            border-bottom: 10px solid #f5f5f5;
            padding-bottom: 15px;
            .weui-btn-area{
                margin: 16px 8px;
            }
        }
        .about-list{

            .about-item{
                padding: 16px;
                .icon-right{
                    float: right;
                }
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
