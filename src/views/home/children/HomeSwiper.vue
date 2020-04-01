<template>
  <div>
    <Swiper :interval="2000">
      <SwiperItem v-for="item in banners">
        <a :href="item.link" target="_blank">
          <img :src="item.image"></img>
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"
export default {
  props:{
    banners:{
      type: Array,
      default(){
        return [] 
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
}
</script>

<style>

</style>