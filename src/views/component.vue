<template>
  <div>
    <header-view></header-view>
    <div class="main-wrapper fn-clear">
      <left-view></left-view>
      <div class="main-right">
        <iframe width="100%"  scrolling="no" height="1314" :src="'../../components/'+ $route.params.name + '/demo/'+ ($route.query.type || $route.params.name)+ '.html'" frameborder="0"></iframe>

        <!---->
        <!--<iframe frameborder="0" width="100%" marginheight="0"  height="1314" marginwidth="0" scrolling="no" id="frm1" name="frm1" :src="'../../components/'+ $route.params.name + '/demo/'+ ($route.query.type || $route.params.name)+ '.html'" onload="ChangeFrameHeight('frm1')"></iframe>-->
        <!---->
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
//
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
//
//
//  function ChangeFrameHeight(id) {
//    var count = 1;
//
//    (function () {
//      var frm = document.getElementById(id);
//      var subWeb = document.frames ? document.frames[id].document : frm.contentDocument;
//
//      if (subWeb != null) {
//        var height = Math.max(subWeb.body.scrollHeight, subWeb.documentElement.scrollHeight);
//        frm.height = height;
//      }
//      if (count < 3) {
//        count = count + 1;
//        window.setTimeout(arguments.callee, 2000);
//      }
//    })();
//  }
</script>

