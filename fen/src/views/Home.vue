<template>
  <div class="home">
    <router-view></router-view>
    <div class="home-router">
      <router-link to="/home/shop"><i class="iconfont">&#xe502;</i><span>商城</span></router-link>
      <router-link to="/home/fenlei"><i class="iconfont">&#xe604;</i><span>分类</span></router-link>
      <router-link to="/home/car"><i class="iconfont">&#xe504;</i><span>购物车</span></router-link>
      <router-link to="/home/my"><i class="iconfont">&#xe512;</i><span>我的</span></router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  components: {
    
  }
}
</script>
<style lang='scss'>
@import '../assets/extend.scss';
.home-router{
  display: flex;
  position: fixed;
  bottom: 0;
  height: 1rem;
  width: 100%;
  background: white;
  a{
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
      color: rgb(153, 153, 153);;
    
    i{
      font-size: 20px;
      height: 0.5rem;
      margin-top: 0.16rem;
    }
    span{
      color: $span;
    }
  }
  .router-link-exact-active span,.router-link-exact-active i{
    color: $active;
    }
}

 
</style>

