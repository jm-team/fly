<!--左侧导航开始-->
<template>
  <div class="main-left fn-left">
    <div class="com-search">
      <i class="jm-icon jm-icon-search"></i>
      <input type="text" placeholder="搜索组件名..." _v-6db9881e="" class="search">
    </div>
    <div class="nav-item">
      <h1>{{navList.name}}</h1>

      <!-- 分组 -->
      <template v-if="navList.groups">
        <ul v-for="group in navList.groups">
          <li class="nav-group-title">{{group.groupName}}</li>
          <li class="nav-group-list" v-for="navItem in group.list">
            <router-link :to="'/component'+navItem.path + (navItem.type ?'?type=' + navItem.type : '')">{{navItem.title}}</router-link>
          </li>
        </ul>
      </template>

    </div>
  </div>
</template>

<script>
  import navList from '../../config/nav.config.json'

  export default {
    name: 'leftNav',
    data () {
      return {
        navList
      }
    }
  }
</script>
