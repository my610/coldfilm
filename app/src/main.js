// Import System requirements
import Vue from 'vue'
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'

sync(store, router)

export default Vue

// Register the global components
import components from './components/register'
components.registerAllGlobalComponents()

// Import Views - Top level
import AppView from './App.vue'

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(AppView)
})
