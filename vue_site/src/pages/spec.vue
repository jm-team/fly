<template>
  <div>
    <header-view></header-view>
    <div class="main-wrapper fn-clear">
      <left-view></left-view>
      <div class="main-right fn-left">
        <router-view></router-view>
      </div>
    </div>
    <footer-view></footer-view>
  </div>
</template>
<script>
  import HeaderView from '../views/header.vue'
  import FooterView from '../views/footer.vue'
  import LeftView from '../views/spec_left_nav.vue'

  export default {
    components: {
      HeaderView,
      FooterView,
      LeftView
    }
  }
</script>

