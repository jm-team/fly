<template>
  <div>
    <header-view></header-view>
    <div class="main-wrapper fn-clear">
      <spec-left-view></spec-left-view>
      <div class="main-right">
    <router-view>          <iframe width="100%" height="1354" frameborder="0" :src="'../../components/'+ $route.params.name + '/demo/'+ ($route.query.type || $route.params.name)+ '.html'" >22222</iframe>
    </router-view>

      </div>
    </div>
    <footer-view></footer-view>
  </div>
</template>
<script>
  import HeaderView from '../components/header.vue'
  import FooterView from '../components/footer.vue'
  import SpecLeftView from '../components/spec_left_nav.vue'

  export default {
    components: {
      HeaderView,
      FooterView,
      SpecLeftView
    }
  }
</script>

