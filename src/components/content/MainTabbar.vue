<template>
  <div> 
    <router-view></router-view>
    <tabbar>
      <tarbar-item path="/home">
        <div slot="item-name"  >首页</div>
        <img slot="item-img" src='~assets/img/tabbar/home.svg'>
        <img slot="item-img-act" src='~assets/img/tabbar/home_active.svg'>
      </tarbar-item>
      <tarbar-item  path="/category">
        <div slot="item-name">分类</div>
        <img slot="item-img" src="~assets/img/tabbar/category.svg" alt="">
         <img slot="item-img-act" src="~assets/img/tabbar/category_active.svg" alt="">
      </tarbar-item>
      <tarbar-item path="/cart">
        <div slot="item-name">购物车</div>
        <img slot="item-img" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-img-act" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      </tarbar-item>
      <tarbar-item path='/profile'>
        <div slot="item-name">我的</div>
        <img slot="item-img" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-img-act" src="~assets/img/tabbar/profile_active.svg" alt="">
      </tarbar-item> 
    </tabbar>
    
</div>
</template>

<script>
import tabbar from 'components/common/tarbar/Tarbar'
import tarbarItem from 'components/common/tarbar/Tarbar-item'
export default {

  components:{
    tabbar,
    tarbarItem
  }

}
</script>

<style>

</style>