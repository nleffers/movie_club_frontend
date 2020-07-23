<template>
  <div>
    <div class="content-wrapper">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Voting Average</th>
            <th>User Rating</th>
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
  created() {
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
