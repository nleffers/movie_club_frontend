<template>
  <div class="movie-info-wrapper">
    <div class="movie-poster">
      <template v-if="movie.poster_path">
        <img :src="movie.poster_path" alt="Poster">
      </template>
    </div>
    <div class="movie-info">
      <h1>{{ movie.title }}</h1>
      <movie-rating
        v-bind.sync="movie"
        :isAuthenticated="isAuthenticated"
      />
      <p>{{ movie.overview }}</p>
      <div class="genre">
        {{ movieGenres }}
      </div>
    </div>
  </div>
</template>

<script>
import MovieRating from './MovieRating.vue'

export default {
  props: {
    isAuthenticated: Boolean,
    movie: Object
  },
  components: {
    MovieRating
  },
  computed: {
    movieGenres() {
      return this.movie && this.movie.genres && this.movie.genres.map(genre => genre.name).join(' | ')
    }
  }
}
</script>

<style scoped>
.movie-info-wrapper {
  display: inline-block;
}

.movie-poster {
  float: left;
}
</style>
