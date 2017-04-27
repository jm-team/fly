<template>
  <div>
    <header-view></header-view>
    <div class="main-wrapper fn-clear">
      <left-view></left-view>
      <div class="main-right">
        <iframe width="100%"  scrolling="no" :src="'../../components/'+ $route.params.name + '/demo/'+ ($route.query.type || $route.params.name)+ '.html'" frameborder="0"></iframe>
      </div>
    </div>
    <footer-view></footer-view>
  </div>
</template>
<script>
  import HeaderView from '../components/header.vue'
  import FooterView from '../components/footer.vue'
  import LeftView from '../components/left_nav.vue'

  export default {
    components: {
      HeaderView,
      FooterView,
      LeftView
    }
  }
//  Vue.use(VueRouter)

//  // 定义组件
//  var Foo = Vue.extend({
//    props: ['src'],
//    template: '<iframe :src="src"></iframe>',
//    route: {
//      data: function (transition) {
//        this.src = '../../../components/'+transition.to.path+'/demo/'+transition.to.path+'.html'
//      }
//    }
//  });
//  var App = Vue.extend({});
//  var router = new VueRouter();
//
//  router.map({
//    '/components/breadCrumb': {
//      component: BreadCrumb
//    },
//    '/bar': {
//      component: Foo
//    }
//  });
//  router.start(App, '#app')
</script>

