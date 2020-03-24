<template>
  <div class="tarbar-item" @click="switchViews">
    <div v-if="!isActive"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-act"></slot></div>
    <div :style='activeStyle' ><slot name="item-name"></slot></div>
   
  </div>

</template>

<script>
export default {
  props:{
    path:{
      type: String
    },
    activeColor: {
      type: String,
      default: "red"
    }
  },
  computed:{
    isActive(){
      // 判断props的path属性，是否和已经激活的url的path是否一致，如果一致就是激活状态
      // return ! this.$route.path.indexOf(this.path)
      return ! this.$route.path.indexOf(this.path)
    },
    activeStyle(){
      // 3元表达式
      return this.isActive ? {color: this.activeColor} :{}
    }
  },

  methods:{
    switchViews(){
      // console.log(this.$route)
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
  .tarbar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
   .tarbar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>