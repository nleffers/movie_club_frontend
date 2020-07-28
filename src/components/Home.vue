<template>
  <div class="home-page">
    <youtube
      v-if="currentTrailerSource"
      :video-id="currentTrailerSource"
      @playing="playing"
      @ended="ended"
    />
    <div class="trailers-column">
      <div
        v-for="(trailer, index) in trailersNotPlaying"
        :key="index"
        :ref="'trailer-' + index"
        @click="changeTrailerManually(trailer.id)"
      >
        <div class="trailer-not-playing-row">
          <p>{{ trailer.title }}</p>
          <p>{{ trailer.trailer.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import movies from '@/requests/movies.js'

export default {
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
      return this.movieTrailers.filter(trailer => trailer.id !== this.currentTrailer.id)
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
  display: inline-flex;
}
</style>
