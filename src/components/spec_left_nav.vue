<!--左侧导航开始-->
<template>
  <div class="main-left fn-left">
    <!--<ul>-->
      <!--<li class="main-left-title">设计规范</li>-->
      <!--<li>-->
        <!--<ul class="">-->
          <!--<li><a href="#">字体</a></li>-->
          <!--<li><a href="#">排版</a></li>-->
          <!--<li><a href="#">色彩</a></li>-->
          <!--<li><a href="#">安装</a></li>-->
          <!--<li><a href="#">更新日志</a></li>-->
        <!--</ul>-->
      <!--</li>-->

    <!--</ul>-->
    <div class="nav-item">
      <h1>{{navList.name}}</h1>
    <template v-if="navList.groups">
    <ul v-for="group in navList.groups">
      <li class="nav-group-list" v-for="navItem in group.list" :class="{current: '/' + $route.params.name === navItem.path && navItem.type === $route.query.type}">
            <router-link :to="'/spec'+navItem.path + (navItem.type ?'?type=' + navItem.type : '')">{{navItem.title}}</router-link>
      </li>
    </ul>
    </template>
      </div>
  </div>
</template>

<script>
  import navList from '../../site/specNav.config.json'

  export default {
    name: 'specLeft Nav',
    data () {
      return {
        navList
      }
    }
  }
</script>
