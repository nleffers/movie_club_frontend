<template>
  <div class="movie-review">
    <b-form @submit.prevent="editReview">
      <b-form-group
        label="Title:"
        horizontal
      >
        <b-form-input
          :value="title"
          @input="$emit('update:title', $event.target.value)"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group
        label="Blog:"
        horizontal
      >
        <b-form-textarea
          placeholder="Write a review!"
          rows="3"
          max-rows="6"
          :value="blog"
          @input="$emit('update:blog', $event.target.value)"
        >
        </b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary" id="create-movie-review-submit">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
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

      reviews.editReview(this.review)
    }
  }
}
</script>
