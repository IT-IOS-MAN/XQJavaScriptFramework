<template>
  <img class="img-header" src="./assets/20221114170954.png">
  <HelloWorld msg="欢迎使用 Vue.js + JavaScript + XQJavaScriptFramework"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    console.log(["iOS", "Android"].xq_firstElement);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.img-header {
  border-radius: 50%;
}
</style>
