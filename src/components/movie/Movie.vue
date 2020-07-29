<template>
  <div>
    <movie-info
      :isAuthenticated="isAuthenticated"
      :movie="movie"
    />
    <hr>
    <div style="display: inline-flex;">
      <cast-info
        :casts="movie.casts"
        :isAuthenticated="isAuthenticated"
      />
      <create-review
        :imdbId="movie.imdb_id"
        :isAuthenticated="isAuthenticated"
      />
      <reviews-form
        :currentUserId="currentUserId"
        :reviews="reviews"
      />
    </div>
  </div>
</template>

<script>
import movies from '@/requests/movies.js'
import MovieInfo from './movie_components/MovieInfo.vue'
import CastInfo from './movie_components/CastInfo.vue'
import CreateReview from './movie_components/CreateReview.vue'
import ReviewsForm from './movie_components/ReviewsForm.vue'

export default {
  props: {
    id: [Number, String]
  },
  components: {
    MovieInfo,
    CastInfo,
    CreateReview,
    ReviewsForm
  },
  beforeMount() {
    this.getMovie()
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters['UserInfoStore/isAuthenticated']
    },
    currentUserId() {
      return this.$store.getters[`UserInfoStore/id`]
    },
    movie() {
      return this.$store.getters[`MovieStore/movie`]
    },
    reviews() {
      return this.$store.getters[`MovieStore/reviews`]
    }
  },
  methods: {
    getMovie() {
      movies.getMovie(this.id)
      .then(response => {
        this.$store.dispatch(`MovieStore/setMovie`, response.data)
      })
    }
  },
  destroyed() {
    this.$store.dispatch(`MovieStore/clearMovie`)
  }
}
</script>

<style scoped>
<style>
