<template>
  <div class="top-rated-wrapper">
    <movie-row
      v-for="(movie, index) in movies"
      :movie="movie"
      :key="index"
      :ref="'user-movie-' + index"
    />
  </div>
</template>

<script>
import MovieRow from '../../shared/MovieRow.vue'

export default {
  components: {
    MovieRow
  },
  computed: {
    movies() {
      return this.$store.getters[`MovieStore/topRated`]
    }
  }
}
</script>
