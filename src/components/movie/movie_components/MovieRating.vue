<template>
  <div>
    <p>Average Rating: {{ averageRating }}</p>
    <p v-if="user_rating">Your Rating: {{ user_rating }}</p>
    <div
      v-if="currentUserId"
      id="user-rating"
    >
      <div @click="rateMovie(1)">
        <i
          class="fa fa-star"
          :class="{ 'checked': oneStar }"
        ></i>
      </div>
      <div @click="rateMovie(2)">
        <i
          class="fa fa-star"
          :class="{ 'checked': twoStars }"
        ></i>
      </div>
      <div @click="rateMovie(3)">
        <i
          class="fa fa-star"
          :class="{ 'checked': threeStars }"
        ></i>
      </div>
      <div @click="rateMovie(4)">
        <i
          class="fa fa-star"
          :class="{ 'checked': fourStars }"
        ></i>
      </div>
      <div @click="rateMovie(5)">
        <i
          class="fa fa-star"
          :class="{ 'checked': fiveStars }"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import movies from '@/requests/movies.js'
export default {
  props: {
    id: [Number, String],
    rating: [Number, String],
    rating_count: [Number, String],
    user_rating: [Number, String],
    currentUserId: [Number, String]
  },
  computed: {
    averageRating() {
      return this.rating_count == 0 ? 0 : this.rating / this.rating_count
    },
    oneStar() {
      return this.user_rating == '1'
    },
    twoStars() {
      return this.user_rating == '2'
    },
    threeStars() {
      return this.user_rating == '3'
    },
    fourStars() {
      return this.user_rating == '4'
    },
    fiveStars() {
      return this.user_rating == '5'
    }
  },
  methods: {
    rateMovie(value) {
      const ratingObject = {
        id: this.id,
        rating: value
      }

      movies.rateMovie(ratingObject)
        .then(response => {
          this.$store.dispatch(`MovieStore/rateMovie`, value)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.at-least-this-good {
  color: yellow;
}
</style>
