<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="getData">测试axios</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axiox from 'axios'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    getData(){
     return axiox({
      //  http://123.207.32.32:8000/api/wh/home/data?page=1&type=sell
       method: "get",
       url: "http://123.207.32.32:8000/api/wh/home/data",
       params:{
         page: "1",
         type: "sell"
       }
     }).then(result => {
       console.log(result)
     })
    }
  }
}
</script>
