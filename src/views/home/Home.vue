<template>
  <div>  
    <NavBar class='home-nav'><div slot="center">购物街</div></NavBar> 
    <HomeSwiper class="home-swiper" :banners="banners" />
    <Recommend :recommends="recommends" />
    <FeatureView /> 
    <TabControl id="tab-control" :titles='["流行","新款","精选"]' @ItemClick="ItemClick" />
    <goodsList :goods="getGoodsList" />

  </div>

</template>

<script>
// @ is an alias to /src
import NavBar from "components/common/navbar/NavBar"
import TabControl from "components/content/tabControl/TabControl"
import goodsList from "components/content/goods_list_show/goodsList"

import HomeSwiper  from "./children/HomeSwiper"
import Recommend  from "./children/HomeRecommend"
import FeatureView from "./children/FeatureView"


import { GetHomeMultiData, getProductData } from "network/home.js"


export default {
  components:{
    NavBar,
    HomeSwiper,
    Recommend,
    FeatureView,
    TabControl,
    goodsList
  },
  data(){
    return {
      banners: null,
      recommends: null,
      currentType: "pop",
      goodsInfo: {
        new: {list:[], page:1},
        sell: {list:[], page:1},
        pop: {list:[], page:1}
      }
    }
  },
  created(){
    this.HomeMultiData()
    this.ProductData("pop")
    this.ProductData("new", 1)
    this.ProductData("sell", 1)
  },
  methods:{
    ProductData(type){
      let l_page = this.goodsInfo[type].page 
      getProductData(type, l_page).then(res => {
        // this.goodsInfo[type].list = res.data.list
        this.goodsInfo[type].list.push(...res.data.list)
        // console.log(this.goodsInfo[type].list)
        // 获取数据后，自动增加页码
        this.goodsInfo[type].page += 1
      })
    },
    HomeMultiData(){
      GetHomeMultiData().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
      //console.log( this.banners)
    })
    },
    ItemClick(index){

      switch (index){
        case 0:
          this.currentType = "pop"
          break;
        case 1:
          this.currentType = "new"
          break;
        case 2:
          this.currentType = "sell"
          break;
        default:
          this.currentType = "pop"
      }
    }
  },
  computed:{
    getGoodsList(){
      return this.goodsInfo[this.currentType].list
    }
  }
}
</script>
<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    z-index: 9;
    right: 0;
    left: 0;
    top:0;
  }
  .home-swiper {
    margin-top: 44px;
  }
  
  #tab-control {
    position: sticky;
    top: 44px;
  }

</style>
