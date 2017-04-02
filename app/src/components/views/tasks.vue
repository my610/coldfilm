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
        <small><p class="text-info pull-right">Total tasks: {{ totalItems }}</p></small>
      </div>
    </div><!-- .row -->

    <hr style="margin-top: 5px;">

    <div class="row">
      <div class="col-md-12">
        <loading-component :loading="loading"></loading-component>
        <div v-show="isEmpty" class="text-center">Нет данных для отображения...</div>
        <ol id="films">
          <li v-for="(item, index) in films" :key="item.film_id">
            <a :href="getUrlFilm(item.id)" target="_blank" title="item.title">
              {{ item.id + ' - ' + item.title }}</a>
            -
            <a type="button" title="Удалить" aria-label="Удалить" @click="deleteFilm(index, item.id)"
               class="btn btn-xs text-danger">DELETE</a>
          </li>
        </ol>
      </div>
    </div><!-- .row -->
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
          status: 1
        }

        films.getFilmTranslated(options)
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
      getUrlFilm (id) {
        return `http://coldfilm.ru/news/2017-02-28-${id}`
      },
      deleteFilm (index, id) {
        films.deleteTask(id)
          .then(() => {
            this.films.splice(index, 1)
            this.totalItems -= 1
            // this.loadItems(this.currentPage)
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
</script>
