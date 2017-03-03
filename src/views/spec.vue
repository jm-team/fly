<template>
  <div>
    <header-view></header-view>
    <div class="main-wrapper fn-clear">
      <left-view></left-view>
      <div class="main-right">
        <router-view></router-view>
      </div>
    </div>
    <footer-view></footer-view>
  </div>
</template>
<script>
  import HeaderView from '../components/header.vue'
  import FooterView from '../components/footer.vue'
  import LeftView from '../components/spec_left_nav.vue'

  export default {
    components: {
      HeaderView,
      FooterView,
      LeftView
    }
  }
</script>

