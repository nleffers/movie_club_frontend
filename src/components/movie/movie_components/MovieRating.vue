<template>
  <div class="movie-rating">
    <div class="average-rating">Average Rating: {{ vote_average }}</div>
    <div class="genres">{{ movieGenres }}</div>
    <div
      v-if="isAuthenticated"
      class="user-rating-wrapper"
    >
      User Rating:
      <div
        class="user-rating"
        :class="{ 'checked': oneStar }"
        @click="rateMovie(1)"
      >
        <i
          class="fa fa-star"
        ></i>
      </div>
      <div
        class="user-rating"
        :class="{ 'checked': twoStars }"
        @click="rateMovie(2)"
      >
        <i
          class="fa fa-star"
        ></i>
      </div>
      <div
        class="user-rating"
        :class="{ 'checked': threeStars }"
        @click="rateMovie(3)"
      >
        <i
          class="fa fa-star"
        ></i>
      </div>
      <div
        class="user-rating"
        :class="{ 'checked': fourStars }"
        @click="rateMovie(4)"
      >
        <i
          class="fa fa-star"
        ></i>
      </div>
      <div
        class="user-rating"
        :class="{ 'checked': fiveStars }"
        @click="rateMovie(5)"
      >
        <i
          class="fa fa-star"
        ></i>
      </div>
      <div
        class="user-rating"
        :class="{ 'checked': sixStars }"
        @click="rateMovie(6)"
      >
        <i
          class="fa fa-star"
        ></i>
      </div>
      <div
        class="user-rating"
        :class="{ 'checked': sevenStars }"
        @click="rateMovie(7)"
      >
        <i
          class="fa fa-star"
        ></i>
      </div>
      <div
        class="user-rating"
        :class="{ 'checked': eightStars }"
        @click="rateMovie(8)"
      >
        <i
          class="fa fa-star"
        ></i>
      </div>
      <div
        class="user-rating"
        :class="{ 'checked': nineStars }"
        @click="rateMovie(9)"
      >
        <i
          class="fa fa-star"
        ></i>
      </div>
      <div
        class="user-rating"
        :class="{ 'checked': tenStars }"
        @click="rateMovie(10)"
      >
        <i
          class="fa fa-star"
        ></i>
      </div>
    </div>
    <div
      v-else
      class="user-rating-wrapper"
    >
      <router-link :to="{ name: 'login_path', params: {} }">
        Sign in to rate the movie!
      </router-link>
    </div>
  </div>
</template>

<script>
import movies from '@/requests/movies.js'
export default {
  props: {
    id: [Number, String],
    imdb_id: String,
    vote_average: [Number, String],
    user_rating: [Number, String],
    isAuthenticated: Boolean,
    movieGenres: String
  },
  computed: {
    oneStar() {
      return Number(this.user_rating) >= 1
    },
    twoStars() {
      return Number(this.user_rating) >= 2
    },
    threeStars() {
      return Number(this.user_rating) >= 3
    },
    fourStars() {
      return Number(this.user_rating) >= 4
    },
    fiveStars() {
      return Number(this.user_rating) >= 5
    },
    sixStars() {
      return Number(this.user_rating) >= 6
    },
    sevenStars() {
      return Number(this.user_rating) >= 7
    },
    eightStars() {
      return Number(this.user_rating) >= 8
    },
    nineStars() {
      return Number(this.user_rating) >= 9
    },
    tenStars() {
      return Number(this.user_rating) >= 10
    }
  },
  methods: {
    rateMovie(value) {
      const ratingObject = {
        id: this.id,
        imdb_id: this.imdb_id,
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
.movie-rating {
  display: inline-flex;
  width: 600px;
  margin-bottom: 15px;
}

.average-rating, .genres {
  border-right: 1px solid black;
  margin-right: 5px;
  padding-right: 25px;
  width: 30%;
}

.genres, .user-rating-wrapper {
  margin-left: 5px;
  padding-left: 25px;
}

.average-rating {
  text-align: right;
}

.genres {
  text-align: center;
}

.user-rating-wrapper {
  width: 40%;
}

.user-rating {
  display: inline-block;
}

.checked {
  color: orange;
}
</style>
