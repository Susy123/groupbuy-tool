<template>
  <div id="app">
    <router-view/>
    <div class="app__navbar">
      <KFlex>
        <KFlexItem><KView class="app__nabbaritem"
                          :class="{ active: activeTab==1 }"
                          @click="clickNav(1)">首页</KView></KFlexItem>
        <KFlexItem><KView class="app__nabbaritem"
                          :class="{ active: activeTab==2 }"
                          @click="clickNav(2)">新建团购</KView></KFlexItem>
        <KFlexItem><KView class="app__nabbaritem"
                          :class="{ active: activeTab==3 }"
                          @click="clickNav(3)">我的信息</KView></KFlexItem>
      </KFlex>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  data() {
    return {
      activeTab: 1
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
  }
</style>
