<template>
  <div class="popular-wrapper">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Average Rating</th>
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
</template>

<script>
import MovieRow from '../../shared/MovieRow.vue'

export default {
  components: {
    MovieRow
  },
  computed: {
    movies() {
      return this.$store.getters[`MovieStore/popular`]
    }
  }
}
</script>
