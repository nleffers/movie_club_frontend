<template>
  <div>
    <div class="content-wrapper">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>User Rating</th>
          </tr>
        </thead>
        <tbody>
          <div v-for="(movie, index) in movies">
            <router-link :to="{ name: 'movie_path', params: { id: movie.id } }">
              <tr
                :key="index"
                :movie="movie"
                :ref="'userMovie' + index"
              >
                <td>{{ movie.title }}</td>
                <td>{{ movie.user_rating }}</td>
              </tr>
            </router-link>
          </div>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import users from '@/requests/users.js'

export default {
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
