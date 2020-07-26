<template>
  <div>
    <movie-info :movie="movie" />
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
import MovieInfo from './movie_components/MovieInfo.vue'
import CreateReview from './movie_components/CreateReview.vue'
import ShowReview from './movie_components/ShowReview.vue'
import EditReview from './movie_components/EditReview.vue'

export default {
  props: {
    id: [Number, String]
  },
  components: {
    MovieInfo,
    CreateReview,
    EditReview,
    ShowReview,
  },
  mounted() {
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
  },
  destroyed() {
    this.$store.dispatch(`MovieStore/clearMovie`)
  }
}
</script>
