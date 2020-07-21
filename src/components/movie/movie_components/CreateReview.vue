<template>
  <div class="create-movie-review">
    <div>
      <label>Title</label>
      <input :value="title"></input>
    </div>
    <div>
      <label>Blog</label>
      <textarea :value="blog"></textarea>
    </div>
  </div>
</template>

<script>
import reviews from '@/requests/reviews.js'

export default {
  data() {
    return {
      title: '',
      blog: ''
    }
  },
  methods: {
    createReview() {
      const reviewObject = {
        title: this.title,
        blog: this.blog
      }
      reviews.createReview(reviewObject)
      .then(response => {
        this.$store.dispatch(`MovieStore/addToMovieReviews`, response.data)
      })
    }
  }
}
</script>
