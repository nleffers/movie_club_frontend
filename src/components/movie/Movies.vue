<template>
  <div>
    <div class="content-wrapper">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Average Rating</th>
          </tr>
        </thead>
        <tbody>
          <movie-row
            v-for="(movie, index) in movies"
            :movie="movie"
            :key="index"
            :ref="'user-movie-' + index"
          >
          </movie-row>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import movies from '@/requests/movies.js'
import MovieRow from '../shared/MovieRow.vue'

export default {
  components: {
    MovieRow
  },
  data() {
    return {
      movies: []
    }
  },
  created() {
    this.getMovies()
  },
  methods: {
    getMovies() {
      movies.getMovies()
        .then(response => {
          this.movies = response.data
        })
    }
  }
}
</script>
