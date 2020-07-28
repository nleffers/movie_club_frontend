<template>
  <div class="reviews-column">
    <template v-for="(review, index) in reviews">
      <review-form
        :currentUserId="currentUserId"
        :review="review"
        :key="index"
      />
      <hr>
    </template>
  </div>
</template>

<script>
import ReviewForm from './ReviewForm.vue'

export default {
  props: {
    currentUserId: Number,
    reviews: Array
  },
  components: {
    ReviewForm
  },
  methods: {
    reviewWrittenByUser(userId) {
      this.currentUserId == userId
    }
  }
}
</script>

<style scoped>
.reviews-column {
  height: 500px;
  margin-left: 1.5%;
  margin-right: 1.5%;
  overflow-y: scroll;
  padding-top: 50px;
  width: 30%;
}
</style>
