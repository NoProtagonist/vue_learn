<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 这里使用我们引入的组件-->
    <Header/>
    <router-view/> 
  </div>
</template>

<script>
//引入Header组件
import Header from '@/components/Header'
export default {
  name: 'App',
  //在当前组件注册子组件Header，然后再上面的html中才能使用<Header/>
  components:{
    //这里相当于"Header":Header,当要取的组件名字和组件一样，可以用这种简写形式
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
