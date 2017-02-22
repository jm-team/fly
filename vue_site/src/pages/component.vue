<template>
  <div>
    <header-view></header-view>
    <div class="main-wrapper fn-clear">
      <left-view></left-view>
      <div class="main-right fn-left">
        <iframe src="../../static/breadCrumb/demo/breadCrumb.html" frameborder="0"></iframe>
      </div>
    </div>
    <footer-view></footer-view>
  </div>
</template>
<script>
  import HeaderView from '../views/header.vue'
  import FooterView from '../views/footer.vue'
  import LeftView from '../views/left_nav.vue'

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

