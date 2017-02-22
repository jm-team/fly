import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Component from '../pages/component'
import Spec from '../pages/spec'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/component',
      name: 'Component',
      component: Component
    },
    {
      path: '/spec',
      name: 'Spec',
      component: Spec
    }
  ]
})
