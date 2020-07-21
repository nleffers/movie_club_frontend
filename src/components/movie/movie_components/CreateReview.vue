<template>
  <div class="create-movie-review">
    <b-form @submit.prevent="createReview">
      <b-form-group
        label="Title:"
        horizontal
      >
        <b-form-input
          type="text"
          v-model="title"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group
        label="Blog:"
        horizontal
      >
        <b-form-textarea
          type="text"
          v-model="blog"
          placeholder="Write a review!"
          rows="3"
          max-rows="6"
        >
        </b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary" id="create-movie-review-submit">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import reviews from '@/requests/reviews.js'

export default {
  props: {
    movieId: Number
  },
  data() {
    return {
      title: '',
      blog: ''
    }
  },
  methods: {
    createReview() {
      let reviewObject = {
        title: this.title,
        blog: this.blog,
        movie_id: this.movieId
      }
      reviews.createReview(reviewObject)
      .then(response => {
        reviewObject.id = response.data.id
        this.$store.dispatch(`MovieStore/addToMovieReviews`, reviewObject)
      })
    }
  }
}
</script>
