<template>
  <div class="top clearfix">
    <div class="logo fn-left"></div>
    <div class="nav fn-right ">
      <ul class="clearfix">
        <li class="fn-left"><router-link to="/" exact>首页</router-link></li>
        <!--<li class="fn-left"><a href="#">指南</a></li>-->
        <li class="fn-left"><router-link to="/spec/font">规范</router-link></li>
        <li class="fn-left"><router-link to="/component/button">组件</router-link></li>
        <!--<li class="fn-left"><a href="#">模式</a></li>-->
        <!--<li class="fn-left"><a href="#">资源</a></li>-->
        <li class="fn-left"><a href="#">资源</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'header',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>

</style>
