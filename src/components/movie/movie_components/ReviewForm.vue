<template>
  <div class="movie-review">
    <div v-if="userEditing">
      <form @submit.prevent="updateReview">
        <div>
          <input
            :value="review.title"
            @input="$emit('update:title', $event.target.value)"
          >
          </input>
        </div>
        <div>
          <textarea
            rows="3"
            max-rows="6"
            :value="review.blog"
            @input="$emit('update:blog', $event.target.value)"
          >
          </textarea>
        </div>
        <button type="submit" variant="primary" id="edit-movie-review-submit">Submit</button>
      </form>
    </div>
    <div
      v-else
      class="show-review"
    >
      <div class="review-title">{{ review.title }}</div>
      <div class="review-blog">{{ review.blog }}</div>
    </div>
    <div
      v-if="userIsOwner"
      class="edit-button"
      @click="switchToEdit"
    >
      Edit
    </div>
    <div class="last-edited-at">
      By {{ review.written_by_username }} at {{ review.created_at | localTime }}
    </div>
  </div>
</template>

<script>
import reviews from '@/requests/reviews.js'
import EditReview from './EditReview.vue'

export default {
  props: {
    currentUserId: Number,
    review: Object
  },
  components: {
    EditReview
  },
  data() {
    return {
      userEditing: false
    }
  },
  filters: {
    localTime(value) {
      return new Date(value).toLocaleDateString()
    }
  },
  computed: {
    userIsOwner() {
      return this.review && this.currentUserId === this.review.user_id
    }
  },
  methods: {
    updateReview() {
      const reviewObject = {
        id: this.id,
        title: this.title,
        blog: this.blog
      }

      reviews.updateReview(reviewObject)
      this.userEditing = false
    },
    switchToEdit() {
      this.userEditing = true
    }
  }
}
</script>

<style scoped>
.movie-review input, .movie-review textarea {
  margin-top: 15px;
  padding: 5px;
  width: 100%;
}

.show-review {
  text-align: left;
}

.review-title {
  font-weight: bold;
}

.edit-button {
  border: 1px solid black;
  border-radius: 5px;
  margin: auto;
  padding-left: 5px;
  padding-right: 5px;
  width: fit-content;
}

.last-edited-at {
  font-size: 10px;
  margin-top: 5px;
}
</style>
