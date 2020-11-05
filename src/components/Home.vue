<template>
  <div class="home-page">
    <div class="trailer-section">
      <youtube
        v-if="currentTrailerSource"
        class="trailer"
        :video-id="currentTrailerSource"
        @playing="playing"
        @ended="ended"
      />
      <trailer-column
        :trailers="trailersNotPlaying"
        @changeTrailerManually="changeTrailerManually($event)"
      />
    </div>
  </div>
</template>

<script>
import movies from '@/requests/movies.js'
import TrailerColumn from './home/TrailerColumn.vue'

export default {
  components: {
    TrailerColumn
  },
  data() {
    return {
      movieTrailers: [],
      trailerChangeTimer: setInterval(this.changeTrailers, 5000)
    }
  },
  computed: {
    store() {
      return this.$store
    },
    currentTrailer() {
      return this.movieTrailers[0]
    },
    currentTrailerSource() {
      return this.currentTrailer && this.currentTrailer.trailer && this.currentTrailer.trailer.source || null
    },
    trailersNotPlaying() {
      return this.movieTrailers.slice(1, -1)
    }
  },
  mounted() {
    this.getHomePage()
  },
  destroyed() {
    clearInterval(this.trailerChangeTimer)
  },
  methods: {
    getHomePage() {
      movies.getHomePage()
      .then(response => {
        this.movieTrailers = response.data
      })
      .catch(err => {
        console.log(err)
      })
    },
    playing() {
      clearInterval(this.trailerChangeTimer)
    },
    ended() {
      this.trailerChangeTimer = setInterval(this.changeTrailers, 5000)
    },
    changeTrailers() {
      this.movieTrailers.push(this.movieTrailers.shift())
    },
    changeTrailerManually(value) {
      while (this.movieTrailers[0].id !== value) {
        this.changeTrailers()
      }
      clearInterval(this.trailerChangeTimer)
      this.trailerChangeTimer = setInterval(this.changeTrailers, 5000)
    }
  }
}
</script>

<style scoped>
.home-page {
  margin-top: 20px;
}

.trailer-section {
  width: 90%;
  display: inline-block;
}

.trailer {
  float: left;
  width: 640px;
}
</style>
