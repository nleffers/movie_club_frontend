<template>
  <div>
    <div class="content-wrapper">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Average Rating</th>
            <th>Users Rated</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(movie, index) in movies"
            :key="index"
            :movie="movie"
            :ref="'userMovie' + index"
          >
            <td>
              <router-link
                :to="{ name: 'movie_path', params: { id: movie.id } }"
              >
                {{ movie.title }}
              </router-link>
            </td>
            <td>
              <router-link
                :to="{ name: 'movie_path', params: { id: movie.id } }"
              >
                {{ movie.rating / movie.rating_count }}
              </router-link>
            </td>
            <td>
              <router-link
                :to="{ name: 'movie_path', params: { id: movie.id } }"
              >
                {{ movie.rating_count }}
              </router-link>
            </td>
          </tr>
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

<style scoped>
.content-wrapper {
  display: flex;
}

th {
  width: 100px;
  height: 30px;
  text-align: center;
}

tr:nth-child(even) {
  background-color: #eee;
}

td {
  width: 100px;
  padding: 10px 10px 10px 10px;
  text-align: center;
}

thead {
  background-color: #e5e5e5;
}

tbody, thead {
  font-size: 0.73rem;
}
</style>
