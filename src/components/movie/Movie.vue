<template>
  <div>
    <h1>{{ movie.title }}</h1>
    <p>Average Rating: {{ averageRating }}</p>
    <p v-if="movie.user_rating">Your Rating: {{ movie.user_rating }}</p>
    <create-review></create-review>
    <show-review
      v-for="(review, index) in reviews"
      :review="review"
      :key="index"
    >
    </show-review>
  </div>
</template>

<script>
import movies from '@/requests/movies.js'
import CreateReview from './movie_components/CreateReview.vue'
import ShowReview from './movie_components/ShowReview.vue'

export default {
  props: {
    id: Number
  },
  components: {
    CreateReview,
    ShowReview
  },
  created() {
    this.getMovie()
  },
  computed: {
    movie() {
      return this.$store.getters[`MovieStore/movie`]
    },
    reviews() {
      return this.$store.getters[`MovieStore/reviews`]
    },
    averageRating() {
      return this.movie.rating_count == 0 ? 0 : this.movie.rating / this.movie.rating_count
    }
  },
  methods: {
    getMovie() {
      movies.getMovie(this.id)
      .then(response => {
        this.$store.dispatch(`MovieStore/setMovie`, response.data)
      })
    }
  }
}
</script>
