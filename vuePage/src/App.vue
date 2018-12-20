<template>
  <div id="app">
    <h3 class="title">{{ title }}</h3>
    <p class="title">{{ description }}</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return {
      title:"学习vue+mongoose+nodejs构建项目后台(增删改查)",
      description:"前后端分离项目   vue搭建前端页面   node+express+mongodb(mongoose)搭建后端服务(增删改查)"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.title{
  margin-bottom: 50px;
  text-align: center;
}
</style>
