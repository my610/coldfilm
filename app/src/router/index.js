import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routes from './routes'

export default new VueRouter({
  base: __dirname,
  mode: 'history',
  saveScrollPosition: true,
  linkActiveClass: 'active',
  routes
  // scrollBehavior: function (to, from, savedPosition) {
  //   return savedPosition || {x: 0, y: 0}
  // }
})
