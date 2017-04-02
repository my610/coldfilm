import Vue from 'vue'

import modalComponent from './general/modal.vue'
import spinnerComponent from './general/spinner.vue'
import loadingButtonComponent from './general/loadingButton.vue'
import navComponent from './partials/nav.vue'
import footerComponent from './partials/footer.vue'
import loadingComponent from './general/loading.vue'
import viewerFilmInfo from './general/viewFilmInfo.vue'
import smallPagination from './general/sPagination.vue'

export default {

  registerAllGlobalComponents: function () {
    Vue.component('modal', modalComponent)
    Vue.component('spinner', spinnerComponent)
    Vue.component('loading-button', loadingButtonComponent)
    Vue.component('nav-component', navComponent)
    Vue.component('footer-component', footerComponent)
    Vue.component('loading-component', loadingComponent)
    Vue.component('viewer-film-info', viewerFilmInfo)
    Vue.component('small-pagination', smallPagination)
  }
}
