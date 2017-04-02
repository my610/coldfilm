<template>
  <div class="row">
    <!-- Film poster style="max-width: 320px" -->
    <div class="col-md-4 col-sm-4 col-xs-12 text-center">
      <img src="/static/img/loading_spinner.gif"
           v-img="film.img"
           :alt="film.title"
           class="img-thumbnail"
           rel="noreferrer">
    </div>
    <!-- Film information -->
    <div class="col-md-8 col-sm-8 col-xs-12">
      <p>
        <b>Title:</b><br/>
        {{ film.title }}<br/>
        <b>Season:</b> {{film.season}}<br/>
        <b>Last series:</b> {{film.last_series}}<br/>
      </p>
      <p><b>Last update:</b> ...</p>
      <hr>
      <div class="input-group">
        <b style="padding-right: 20px;">Monitoring:</b>

        <div class="btn-group">
          <transition name="fade" mode="out-in">
            <button :key="film.status"
                    @click="changeStatus(film.id, film.status)"
                    class="btn btn-xs btn-primary"
                    :class="status"
                    style="width: 35px;">
              {{ monBtnText }}
            </button>
          </transition>
        </div>
      </div>
      <hr>
      <p><a class="btn btn-xs btn-default" :href="getColdfilmUrl" target="_blank" rel="nofollow">Open to the
        ColdFilm</a></p>
      <p><a class="btn btn-xs btn-default" :href="getTorampUrl" target="_blank" rel="nofollow">Search at
        http://www.toramp.com</a></p>
    </div>
  </div>
</template>
<style>
  .not-active {
    color: #3276b1;
    background-color: #fff;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .1s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .fade-enter {
    transform: translateX(15px);
  }

  .fade-leave-active {
    transform: translateX(-15px);
  }
</style>
<script type="es6">
  import {films} from '../../api'

  export default{
    directives: {
      img (el, url) {
        el.src = '/static/img/loading_spinner.gif'
        let img = new Image()
        img.src = url.value
        img.onload = function () {
          el.src = url.value
        }.bind(this)
      }
    },
    computed: {
      status () {
        return {
          active: this.film.status === 1,
          'not-active': this.film.status === 0
        }
      },
      getTorampUrl () {
        return `http://www.toramp.com/search.php?search=${this.film.title}`
      },
      getColdfilmUrl () {
        return `http://coldfilm.ru/news/1-0-${this.film.id}`
      },
      monBtnText: function () {
        switch (this.film.status) {
          case 0:
            return 'OFF'
          case 1:
            return 'ON'
        }
      }
    },
    props: {
      film: {
        type: Object,
        required: true
      }
    },
    methods: {
      setMonitoring (id, status) {
        films.setMonitoring(id, status)
          .then(res => {
            this.film.status = res.data.status
          })
          .catch(error => {
            console.log(error)
          })
      },
      changeStatus (id, status) {
        this.setMonitoring(id, status === 0 ? 1 : 0)
      }
    }
  }
</script>
