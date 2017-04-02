import Vue from 'vue'
import VueFeathers from 'vue-feathers'
import Feathers from 'feathers/client'
import hooks from 'feathers-hooks'
import authentication from 'feathers-authentication/client'
import axios from 'axios'
import rest from 'feathers-rest/client'

// Configure Feathers client
const feathers = Feathers()
  .configure(rest().axios(axios))
  .configure(hooks())
  .configure(authentication({storage: window.localStorage}))

Vue.use(VueFeathers, feathers)

export default feathers
