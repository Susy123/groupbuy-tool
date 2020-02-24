<template>
  <div id="app">
    <router-view/>
    <div class="app__navbar">
      <KFlex>
        <KFlexItem><KView class="app__nabbaritem"
                          :class="{ active: activeTab==1 }"
                          @click="clickNav(1)">
<!--          <img :src="homeSrc">-->
          <span class="iconfont icon-home"></span>
          首页
        </KView></KFlexItem>
<!--        <KFlexItem><KView class="app__nabbaritem"-->
<!--                          :class="{ active: activeTab==2 }"-->
<!--                          @click="clickNav(2)">-->
<!--          <img src="./assets/round_add_fill.png">-->
<!--        </KView></KFlexItem>-->
        <KFlexItem><KView class="app__nabbaritem"
                          :class="{ active: activeTab==3 }"
                          @click="clickNav(3)">
<!--          <img :src="mySrc">-->
          <span class="iconfont icon-people"></span>
          我的</KView></KFlexItem>
      </KFlex>
<!--      <img class="botton-add" src="./assets/round_add_fill.png" @click="clickNav(2)">-->
      <span class="iconfont icon-roundaddfill" @click="clickNav(2)"></span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  data() {
    return {
      activeTab: 1,
    }
  },
  methods: {
    clickNav(tab) {
      this.activeTab = tab
      if (tab === 1) {
        this.$router.push('/home')
      }
      if (tab === 2) {
        this.$router.push('/new')
      }
      if (tab === 3) {
        this.$router.push('/my')
      }
    }
  },
  computed: {
    homeSrc() {
      // eslint-disable-next-line global-require
      return this.activeTab === 1 ? require('./assets/home_active.png') : require('./assets/home.png')
    },
    mySrc() {
      // eslint-disable-next-line global-require
      return this.activeTab === 3 ? require('./assets/people_active.png') : require('./assets/people.png')
    }
  }
})
</script>

<style lang="less">
@import "./example.less";

.homeIcon{
    position: absolute;
    z-index: 2;
}
  .app__navbar{
    z-index: 500;
    position: fixed;
    bottom: 0;
    width: 100%;
    line-height: 50px;
    border-top: solid 1px #EDEDED;
    background: white;
    .app__nabbaritem{
      text-align: center;
    }
    .active{
      color: #07C160;
    }
    img{
      vertical-align: text-bottom;
      width: 25px;
      height: 25px;
    }
    .botton-add, .iconfont.icon-roundaddfill{
      position: fixed;
      bottom: 0;
      left: 50%;
      width: 60px;
      height: 60px;
      margin-left: -30px;
      font-size: 60px;
      color: #FA5151;
    }
  }
</style>
