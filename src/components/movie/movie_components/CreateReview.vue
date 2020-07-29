<template>
  <div class="create-review-column">
    <template v-if="isAuthenticated">
      <form @submit.prevent="createReview">
        <div>
          <input
            placeholder="Title"
            v-model="title"
          />
        </div>
        <div>
          <textarea
            placeholder="Write a review!"
            rows="10"
            max-rows="15"
            v-model="blog"
          >
          </textarea>
        </div>
        <button type="submit" variant="primary" id="create-movie-review-submit">Submit</button>
      </form>
    </template>
    <template v-else>
      <div class="log-in">
        <router-link :to="{ name: 'login_path', params: {} }">
          Sign in to write a review!
        </router-link>
      </div>
    </template>
  </div>
</template>

<script>
import reviews from '@/requests/reviews.js'

export default {
  props: {
    imdbId: [Number, String],
    isAuthenticated: Boolean
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

<style scoped>
.create-review-column {
  border: 1px solid black;
  border-radius: 5px;
  height: 500px;
  margin-left: 1.5%;
  margin-right: 1.5%;
  overflow-y: scroll;
  width: 30%;
}

.create-review-column input, .create-review-column textarea {
  margin-top: 15px;
  padding: 5px;
  width: 100%;
}

.log-in {
  line-height: 500px;
}
</style>
