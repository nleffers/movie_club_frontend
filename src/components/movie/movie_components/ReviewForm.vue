<template>
  <div class="movie-review">
    <div v-if="userEditing">
      <form @submit.prevent="updateReview">
        <div>
          <input
            :value="title"
            @input="$emit('update:title', $event.target.value)"
          />
        </div>
        <div>
          <textarea
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
    <div
      v-else
      class="show-review"
    >
      <div class="review-title">{{ title }}</div>
      <div class="review-blog">{{ blog }}</div>
    </div>
    <div
      v-if="userIsOwner && !userEditing"
      class="edit-button"
      @click="editReview"
    >
      Edit
    </div>
    <div class="last-edited-at">
      By {{ written_by_username }} at {{ created_at | localTime }}
    </div>
  </div>
</template>

<script>
import reviews from '@/requests/reviews.js'

export default {
  props: {
    id: Number,
    title: String,
    blog: String,
    written_by_username: String,
    created_at: String,
    user_id: Number,
    currentUserId: Number,
  },
  data() {
    return {
      userEditing: false
    }
  },
  filters: {
    localTime(value) {
      return new Date(value).toLocaleString()
    }
  },
  computed: {
    userIsOwner() {
      return this.currentUserId === this.user_id
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
    editReview() {
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
  cursor: pointer;
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
