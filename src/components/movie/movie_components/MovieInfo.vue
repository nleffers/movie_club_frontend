<template>
  <div class="movie-info-wrapper">
    <template v-if="movie.poster_path">
      <img :src="movie.poster_path" alt="Poster">
    </template>
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.overview }}</p>
    <movie-rating
      v-bind.sync="movie"
      :currentUserId="currentUserId"
    />
  </div>
</template>

<script>
import MovieRating from './MovieRating.vue'

export default {
  props: {
    movie: Object
  },
  components: {
    MovieRating
  },
  computed: {
    currentUserId() {
      return this.$store.getters[`UserInfoStore/id`]
    }
  }
}
</script>
