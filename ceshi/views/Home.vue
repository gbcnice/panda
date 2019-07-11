<template>
  <div class="home">
    <router-view></router-view>
    <router-link to="/home/shop">商城</router-link>
    <router-link to="/home/fenlei">分类</router-link>
    <router-link to="/home/car">购物车</router-link>
    <router-link to="/home/my">我的</router-link>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
    
  }
}
</script>
