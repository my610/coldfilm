<template>
  <div id="app">
    <nav-component></nav-component>
    <div class="container container-wrap">
      <transition name="switch" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'App',
    methods: mapActions(['authenticate']),
    created () {
      this.authenticate().catch(error => {
        console.log(error.message)
      })
    }
  }
</script>
<style>
  .switch-enter-active, .switch-leave-active {
    transition: all .2s ease-in-out;
  }
  .switch-enter, .switch-leave-to /* .switch-leave-active для <2.1.8 */ {
    opacity: 0;
  }
  .container-wrap {
    margin-top: 65px;
  }
</style>
