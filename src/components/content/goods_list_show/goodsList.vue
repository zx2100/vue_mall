<template>
  <div class="goods-list">
    <goodsListItem class="item" v-for="item in goods" :goodsItem="item"/>
  </div>
</template>

<script>
import goodsListItem from "components/content/goods_list_show/goodsListItem"
export default {
  props: {
    goods: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components:{
    goodsListItem
  }

}
</script>

<style>
 .goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 3px;
    justify-content: space-around;
  }

  .goods-list .item {
    width: 48%;
  }
</style>