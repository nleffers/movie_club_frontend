<template>
  <div>
    <hr>
    <h1>{{ movie.title }}</h1>
    <p>Average Rating: {{ averageRating }}</p>
    <p v-if="movie.user_rating">Your Rating: {{ movie.user_rating }}</p>
    <hr>
    <create-review :movieId="id"></create-review>
    <hr>
    <template v-for="(review, index) in reviews">
      <show-review
        v-if="reviewByUser(review.user_id)"
        :review="review"
        :key="index"
      />
      <edit-review
        v-else
        v-bind.sync="review"
        :key="index"
      />
      <hr>
    </template>
  </div>
</template>

<script>
import movies from '@/requests/movies.js'
import CreateReview from './movie_components/CreateReview.vue'
import ShowReview from './movie_components/ShowReview.vue'
import EditReview from './movie_components/EditReview.vue'

export default {
  props: {
    id: [Number, String]
  },
  components: {
    CreateReview,
    EditReview,
    ShowReview
  },
  created() {
    this.getMovie()
  },
  computed: {
    currentUserId() {
      return this.$store.getters[`UserInfoStore/id`]
    },
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
    },
    reviewByUser(userId) {
      return this.currentUserId == userId
    }
  }
}
</script>
