<template>
  <div class="row">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Вход</h3>
      </div>
      <div class="panel-body">
        <form @submit.prevent="login" >
          <div v-if="error" class="alert alert-danger">
            <span>{{ error }}</span>
          </div>
          <fieldset>
            <div class="form-group ">
              <label for="email">Email</label>
              <input class="form-control input-sm" v-model="email" name="email" type="text" id="email">
            </div>

            <div class="form-group">
              <label for="password">Пароль</label>
              <input class="form-control input-sm" v-model="password" name="password" type="password" value=""
                     id="password">
            </div>
            <div class="form-group">
              <loading-button type="success" size="sm" :loading="loading">Вход</loading-button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script type="es6">
  export default {
    data () {
      return {
        email: null,
        password: null,
        user: {
          loginButton: null
        },
        loading: false,
        messages: [],
        error: ''
      }
    },
    methods: {
      login () {
        this.loading = true
        console.log(this)
        this.$store.dispatch('login', {email: this.email, password: this.password})
          .then(() => {
            this.loading = false
            let url = require('url')
            let redirect = url.parse(this.$router.currentRoute.fullPath, true).query.redirect
            this.$router.replace(redirect ? redirect : '/')
          })
          .catch(err => {
            this.loading = false
            this.error = err.message
          })
      }
    }
//    ,
//    beforeRouteEnter (to, from, next) {
//      this.$dispatch('clearUserDetails');
//      next();
//    }
  }
</script>
