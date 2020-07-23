<template>
  <div>
    <div class="content-wrapper">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Voting Average</th>
            <th>Voting Count</th>
            <th>User Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(movie, index) in movies"
            :key="index"
            :ref="'userMovie' + index"
          >
            <td>
              <router-link :to="{ name: 'movie_path', params: { id: movie.id } }">
                {{ movie.title }}
              </router-link>
            </td>
            <td>
              <router-link :to="{ name: 'movie_path', params: { id: movie.id } }">
                {{ movie.vote_average }}
              </router-link>
            </td>
            <td>
              <router-link :to="{ name: 'movie_path', params: { id: movie.id } }">
                {{ movie.vote_count }}
              </router-link>
            </td>
            <td>
              <router-link :to="{ name: 'movie_path', params: { id: movie.id } }">
                {{ movie.user_rating }}
              </router-link>
            </td>
          </tr>
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
