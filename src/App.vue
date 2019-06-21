<template>
  <div id="app">
    <router-view id="abs"></router-view>
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="home">
        <div @click="fn('home')">
          <i class="icon iconfont icon-home"></i>
          <p>首页</p>
        </div>
      </mt-tab-item>
      <mt-tab-item id="car">
        <div @click="fn('car')">
          <i class="icon iconfont icon-gouwuche"></i>
          <p>发现</p>
        </div>
      </mt-tab-item>
      <mt-tab-item id="order">
        <div @click="fn('order')">
          <i class="icon iconfont icon-order"></i>
          <p>订单</p>
        </div>
      </mt-tab-item>
      <mt-tab-item id="mine">
        <div @click="fn('mine')">
          <i class="icon iconfont icon-mine-gray"></i>
          <p>我的</p>
        </div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: 'home'
    }
  },
  /* watch: {
    selected (newv, oldv) {
      // console.log(newv, oldv)
      this.$router.push({name: newv})
    }
  } */
  methods:{
    fn(arg){
        this.selected=arg;
        this.$router.push({name: this.selected})
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
p {
  margin: 0px;
  margin-top: 5px;
}
#abs {
  margin: 0 0 47px;
}
body {
  margin: 0px;
}
i {
  font-style: normal;
}
</style>
