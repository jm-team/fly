import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'
import Component from '../views/component'
import Spec from '../views/spec'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'current',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/component/:name',
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
