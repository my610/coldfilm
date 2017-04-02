<template>
  <div>
    <div class="row">
      <div class="col-md-3 col-sm-5 col-xs-12" style="padding-bottom: 5px;">
        <small-pagination
          :current="currentPage"
          :total="totalItems"
          :perPage="perPage"
          @page-changed="loadItems"
        ></small-pagination>
      </div>
      <div class="col-md-9 col-sm-7 col-xs-12">
        <small><p class="text-info pull-right">Total deactivated films: {{ totalItems }}</p></small>
      </div>
    </div>

    <hr style="margin-top: 5px;">

    <div class="row">
      <div class="col-md-3">
        <loading-component :loading="loading"></loading-component>
        <div v-show="isEmpty" class="text-center">Нет данных для отображения...</div>
        <ul id="films">
          <li v-for="film in films" :key="film.id">
            <a href="#" @click="showDetails(film.id)">{{ film.title }}</a>
          </li>
        </ul>
      </div>
      <div class="col-md-9">
        <div v-if="film === null" class="jumbotron jumbotron-error-notfound">
          <h5 class="lead">
            Please select a movie from the list to continue.
          </h5>
        </div>
        <viewer-film-info v-else :film="film"></viewer-film-info>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  import {films} from '../../api'
  import {dateToStr} from '../../utils'

  export default {
    data () {
      return {
        loading: false,
        films: [],
        totalItems: 0,
        perPage: 25,
        currentPage: 1,
        film: null
      }
    },
    beforeMount () {
    },
    mounted: function () {
      this.loadItems(this.currentPage)
    },
    computed: {
      isEmpty () {
        return this.films.length === 0 && !this.loading
      }
    },
    methods: {
      loadItems (page) {
        this.loading = true

        const options = {
          '$skip': (page - 1) * this.perPage,
          '$limit': this.perPage,
          status: 0
        }

        films.seasonInfo(options)
          .then(response => {
            this.films = response.data.data
            this.loading = false
            this.totalItems = response.data.total
            this.currentPage = page
          })
          .catch(error => {
            console.log(error)
            this.loading = false
          })
      },
      showDetails (id) {
        films.getSeasonInfo(id)
          .then(res => {
            this.film = res.data
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
</script>
