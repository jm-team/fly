<template>
  <div>
    <header-view></header-view>
    <div class="main-wrapper fn-clear">
      <spec-left-view></spec-left-view>
      <div class="main-right">
        <iframe width="100%" height="1354" :src="'../../components/'+ $route.params.name + '/demo/'+ ($route.query.type || $route.params.name)+ '.html'" frameborder="0"></iframe>


      </div>
    </div>
    <footer-view></footer-view>
  </div>
</template>
<script>
  import HeaderView from '../components/header.vue'
  import FooterView from '../components/footer.vue'
  import specLeftView from '../components/spec_left_nav.vue'

  export default {
    components: {
      HeaderView,
      FooterView,
      specLeftView
    }
  }
</script>

