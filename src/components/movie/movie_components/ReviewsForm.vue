<template>
  <div class="reviews-form">
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
import EditReview from './EditReview.vue'
import ShowReview from './ShowReview.vue'

export default {
  props: {
    reviews: Array
  },
  components: {
    EditReview,
    ShowReview
  },
  computed: {
    reviewWrittenByUser(userId) {
      return this.currentUserId == userId
    }
  }
}
</script>
