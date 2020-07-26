<template>
  <div class="movie-row-wrapper">
    <router-link :to="{ name: 'movie_path', params: { id: movie.id } }">
      <div class="movie-row">
        <div class="movie-poster">
          <template v-if="movie.poster_path">
            <img :src="movie.poster_path" alt="Poster">
          </template>
          <template v-else>
            No Poster Available
          </template>
        </div>
        <div class="movie-row-info">
          <div id="movie-title">
            {{ movie.title }}
          </div>
          <div id="movie-year">
            {{ movie.release_date | releaseYear }}
          </div>
          <div id="movie-average-rating">
            Average Rating: {{ movie.vote_average }}
          </div>
          <template v-if="isAuthenticated">
            <div id="movie-user-rating">
              User Rating: {{ movie.user_rating }}
            </div>
          </template>
        </div>
      </div>
    </router-link>
    <hr>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters['UserInfoStore/isAuthenticated']
    }
  },
  filters: {
    releaseYear(value) {
      return value.substring(0, 4)
    }
  }
}
</script>

<style scoped>
.movie-poster {
  display: inline-block;
  text-align: right;
  width: 30%;
}

.movie-row-info {
  display: inline-block;
  text-align: left;
  padding-left: 25px;
  width: 70%;
}
</style>
