<template>
  <div>
    <h1>这是我的第一个vue项目</h1>
    <!--这里表示路由跳转，router-link标签会被渲染成一个a标签，to属性被渲染成href属性，这里的path也可以是name，那么必须和router中index.js中对应的路劲的name一致 -->
    <router-link :to="{ path: '/hello' }" @click="cli2Hello">点击我</router-link>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },

  methods:{
    cli2Hello(){
      this.$router

    }
  }

};
</script>
<style lang='' scoped>
</style>