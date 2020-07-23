<template>
  <div class="create-movie-review">
    <form @submit.prevent="createReview">
      <div>
        <label>Title</label>
        <input v-model="title">
        </input>
      </div>
      <div>
        <label>Blog</label>
        <textarea
          placeholder="Write a review!"
          rows="3"
          max-rows="6"
          v-model="blog"
        >
        </textarea>
      </div>
      <button type="submit" variant="primary" id="create-movie-review-submit">Submit</button>
    </form>
    <hr>
  </div>
</template>

<script>
import reviews from '@/requests/reviews.js'

export default {
  props: {
    imdbId: [Number, String]
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
        imdb_id: this.imdbId
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
