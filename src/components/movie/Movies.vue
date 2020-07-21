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
                <td>{{ movie.rating / movie.rating_count }}</td>
              </tr>
            </router-link>
          </div>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import movies from '@/requests/movies.js'

export default {
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
