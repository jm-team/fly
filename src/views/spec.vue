<template>
  <div>
    <header-view></header-view>
    <div class="main-wrapper fn-clear">
      <spec-left-view></spec-left-view>
      <div class="main-right">
        <iframe width="100%"  scrolling="no" frameborder="0" :src="'../../components/'+ $route.params.name + '/demo/'+ ($route.query.type || $route.params.name)+ '.html'" ></iframe>


      </div>
    </div>
    <footer-view></footer-view>
  </div>
</template>
<script>
  import HeaderView from '../components/header.vue'
  import FooterView from '../components/footer.vue'
  import specLeftView from '../components/specLeftNav.vue'

  export default {
    components: {
      HeaderView,
      FooterView,
      specLeftView
    }
  }
</script>

