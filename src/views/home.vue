<template>
  <div class="home-body">
    <div class="logo"><img src="../assets/logo.png" alt="聚贸 Jumore"/></div>
    <div class="welcome-wrapper">
      <h2>
        <small>STORY</small>
        <img src="src/assets/story.png" >
      </h2>
      <h3>Components
        <small>WELCOME</small>
      </h3>
      <p>一套为开发者、设计师和产品经理准备的组件库，提供了配套设计资源，帮助你的网站快速成型</p>
      <div class="btn-wrapper">
        <router-link to="/component/button" class="btn btn-link">查看内容</router-link>
      </div>
    </div>

    <transition name="nav-right" mode="out-in">
        <div class="sidebar"  v-show="nav">
          <i class="jm-icon jm-icon-menu sidebar-icon" @click="nav= !nav"></i>
          <ul class="menu-list">
            <li><a href="/">首页 <span>Home</span></a></li>
            <li><a href="">指南 <span>Guide</span></a></li>
            <li><router-link to="/spec">规范 <span>Standard</span></router-link></li>
            <li><router-link to="/component/button">组件 <span>Assembly</span></router-link></li>
            <li><a href="">模式 <span>Pattern</span></a></li>
            <li><a href="">资源 <span>Resources</span></a></li>
          </ul>

        </div>
    </transition>

    <a class="menu-header" v-show="!nav">
      <i class="jm-icon jm-icon-menu" @click="nav= !nav"></i>
    </a>

    <div id="footer">
      <p>JuMore Component library 版权所有</p>
    </div>
  </div>


</template>

<script>
  export default {
    data () {
      return {
        nav: false
      }
    }
  }
</script>

<style>
  .nav-right-enter-active {
    transition: all .3s ease;
  }

  .nav-right-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .nav-right-enter, .nav-right-leave-active {
    transform: translateX(200px);
    opacity: 1;
  }
  .translate-icon-enter-active{
    transition: all .3s ease;
  }
  .menu-header i{
    position: fixed;
    top: 10px;
    right: 10px;
    font-size: 30px;
    color: #ddd;
  }
</style>
