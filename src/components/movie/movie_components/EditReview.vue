<template>
  <div class="movie-review">
    <form @submit.prevent="editReview">
      <div>
        <label>Title</label>
        <input
          :value="title"
          @input="$emit('update:title', $event.target.value)"
        >
        </input>
      </div>
      <div>
        <label>Blog</label>
        <textarea
          placeholder="Write a review!"
          rows="3"
          max-rows="6"
          :value="blog"
          @input="$emit('update:blog', $event.target.value)"
        >
        </textarea>
      </div>
      <button type="submit" variant="primary" id="edit-movie-review-submit">Submit</button>
    </form>
  </div>
</template>

<script>
import reviews from '@/requests/reviews.js'

export default {
  props: {
    id: Number,
    title: String,
    blog: String
  },
  methods: {
    editReview() {
      const reviewObject = {
        id: this.id,
        title: this.title,
        blog: this.blog
      }

      reviews.updateReview(reviewObject)
    }
  }
}
</script>
