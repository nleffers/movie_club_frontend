<template>
  <div class="movie-info-wrapper">
    <div class="movie-poster">
      <template v-if="movie.poster_path">
        <img :src="movie.poster_path" alt="Poster">
      </template>
    </div>
    <div class="movie-info">
      <h1>{{ movie.title }}</h1>
      <p>{{ movie.overview }}</p>
      <template v-for="genre in movie.genres">
        <div class="genre">
          {{ genre.name }}
        </div>
      </template>
      <movie-rating
        v-bind.sync="movie"
        :isAuthenticated="isAuthenticated"
      />
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
