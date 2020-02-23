<template>
  <KView class="page my js_show">
      <KView class="my-info">
          <img src="../data/img/avatar.png" class="avatar">
          <div class="name">子维</div>
          <KFlex class="buy-info">
              <KFlexItem>
                  <KView class="flex-info" @click="clickItem(1)">
                      <KView><img src="./collect.png"></KView>
                      <KView>收藏</KView>
                  </KView>
              </KFlexItem>
              <KFlexItem>
                  <KView class="flex-info" @click="clickItem(2)">
                  <KView><img src="./going.png"></KView>
                  <KView>正在团</KView>
                  </KView>
              </KFlexItem>
              <KFlexItem>
                  <KView class="flex-info" @click="clickItem(3)">
                      <KView><img src="./history.png"></KView><KView>已结束</KView>
                  </KView>
              </KFlexItem>
              <KFlexItem>
                  <KView class="flex-info" @click="clickItem(4)">
                      <KView><img src="./new.png"></KView><KView>我发起</KView>
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
  </KView>
</template>

<script>
import Vue from 'vue'


export default Vue.extend({
  name: 'Button',
  data(){
    return {
      myName: '李子维',
      phoneNo: '15852560707',
      myAddress: 'xx区xx路鳯南小区',
      isEditing: false,
    }
  },
  methods: {
    getUserInfo(e) {
      console.log(e)
    },
    clickModify(){
      if(this.isEditing){
        // 如果是正在编辑中，则点击这个按钮是提交
        this.isEditing = false //TODO 提交结束后重新置为false
      } else {
        // 如果不是正在编辑中，则设置input为可编辑
        this.isEditing = true
      }
    },
    clickCancel(){
      //TODO 从服务器拉取数据显示后将input置为不可编辑
      this.isEditing=false
    },
    clickItem(index){
      if(index===1){
        this.$router.push('/collect')
      }
      if(index===2){
        this.$router.push('/ongoing')
      }
      if(index===3){
        this.$router.push('/done')
      }if(index===4){
        this.$router.push('/created')
      }
    }
  },
  computed:{
    modifyBtnLabel(){
      return this.isEditing ? '确定' : '编辑'
    }
  }
})
</script>
<style lang="less">
    .my{
        .my-info{
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-bottom: 10px solid #f5f5f5;
            padding-bottom: 15px;
            .avatar {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                display: block;
                overflow: hidden;
            }
            .name{
                color: #293539;
                font-size: 30px;
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
                }
            }
        }
    }
</style>
