<template>
  <div class="movies-wrapper">
    <div v-if="movies.length > 0">
      <movie-row
        v-for="(movie, index) in movies"
        :movie="movie"
        :key="index"
        :ref="'user-movie-' + index"
      />
    </div>
    <div v-else>
      <h3>Movies You Rate Will Appear Here!</h3>
    </div>
  </div>
</template>

<script>
import users from '@/requests/users.js'
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
  mounted() {
    this.getUserMovies()
  },
  computed: {
    currentUserId() {
      return this.$store.getters[`UserInfoStore/id`]
    }
  },
  methods: {
    getUserMovies() {
      users.getMovies(this.currentUserId)
        .then(response => {
          this.movies = response.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
