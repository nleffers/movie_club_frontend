<template>
  <div>
    <hr>
    <h1>{{ movie.title }}</h1>
    <movie-rating
      v-bind.sync="movie"
      :currentUserId="currentUserId"
    ></movie-rating>
    <create-review
      v-if="currentUserId"
      :imdbId="movie.imdb_id"
    ></create-review>
    <template v-for="(review, index) in reviews">
      <edit-review
        v-if="reviewWrittenByUser(review.user_id)"
        v-bind.sync="review"
        :key="index"
      />
      <show-review
        v-else
        :review="review"
        :key="index"
      />
    </template>
  </div>
</template>

<script>
import movies from '@/requests/movies.js'
import CreateReview from './movie_components/CreateReview.vue'
import ShowReview from './movie_components/ShowReview.vue'
import EditReview from './movie_components/EditReview.vue'
import MovieRating from './movie_components/MovieRating.vue'

export default {
  props: {
    id: [Number, String]
  },
  components: {
    CreateReview,
    EditReview,
    ShowReview,
    MovieRating
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
    }
  },
  methods: {
    getMovie() {
      movies.getMovie(this.id)
      .then(response => {
        this.$store.dispatch(`MovieStore/setMovie`, response.data)
      })
    },
    reviewWrittenByUser(userId) {
      return this.currentUserId == userId
    }
  }
}
</script>
