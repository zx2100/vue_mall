<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-control-item" :class="{active: index == currIndex}" >
       
      <span @click="itemClick(index)"> {{ item }}</span>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currIndex: 0
    }
  },
  methods: {
    itemClick(index){
      this.currIndex = index
      
      this.$emit("ItemClick", index)
    }
  }

}
</script>

<style>
 .tab-control {
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
    z-index: 8;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .tab-control-item.active span {
    border-bottom: 2px solid var(--color-high-text);
  } .tabControl {
    display: flex;
  }
  .tabControlItem {
    flex-basis: 1;
  }

</style>