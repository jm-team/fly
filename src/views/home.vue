<template>
  <div class="home-body">
    <div class="logo"><img src="../assets/logo.png" alt="聚贸 Jumore"/></div>
    <div class="welcome-wrapper">
      <h2>
        <small>Story</small>
        组件故事
        <!--<i class="jm-icon jm-icon-loading" style="font-size: 50px;"></i>-->

      </h2>
      <h3>Components
        <small>welcome</small>
      </h3>
      <p>一套为开发者、设计师和产品经理准备的组件库，提供了配套设计资源，帮助你的网站快速成型</p>
      <div class="btn-wrapper">
        <router-link to="/component/button" class="btn btn-link">查看内容</router-link>
      </div>
    </div>
    <div class="sidebar">
      <div class="menu-header">
        <i class="jm-icon jm-icon-menu"></i>
      </div>
      <ul class="menu-list">
        <li><a href="/">首页 <span>Home</span></a></li>
        <li><a href="">指南 <span>Guide</span></a></li>
        <li><router-link to="/spec">规范 <span>Standard</span></router-link></li>
        <li><router-link to="/component/button">组件 <span>Assembly</span></router-link></li>
        <li><a href="">模式 <span>Pattern</span></a></li>
        <li><a href="">资源 <span>Resources</span></a></li>
      </ul>
    </div>

    <div id="footer">
      <p>JuMore Component library 版权所有</p>
    </div>
  </div>
</template>
<script>

</script>

