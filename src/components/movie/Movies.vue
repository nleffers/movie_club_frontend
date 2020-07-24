<template>
  <div class="movies-wrapper">
    <div>
      <div
        class="tab-option"
        @click="changeTab('top-rated')"
      >
        Top Rated
      </div>
      <div
        class="tab-option"
        @click="changeTab('popular')"
      >
        Popular
      </div>
      <div
        class="tab-option"
        @click="changeTab('now-playing')"
      >
        Now Playing
      </div>
      <div
        class="tab-option"
        @click="changeTab('upcoming')"
      >
        Upcoming
      </div>
    </div>
    <top-rated-movies v-if="currentTab == 'top-rated'"></top-rated-movies>
    <popular-movies v-else-if="currentTab == 'popular'"></popular-movies>
    <now-playing-movies v-else-if="currentTab == 'now-playing'"></now-playing-movies>
    <upcoming-movies v-else-if="currentTab == 'upcoming'"></upcoming-movies>
  </div>
</template>

<script>
import NowPlayingMovies from './movie_components/NowPlayingMovies.vue'
import PopularMovies from './movie_components/PopularMovies.vue'
import TopRatedMovies from './movie_components/TopRatedMovies.vue'
import UpcomingMovies from './movie_components/UpcomingMovies.vue'

export default {
  components: {
    NowPlayingMovies,
    PopularMovies,
    TopRatedMovies,
    UpcomingMovies
  },
  data() {
    return {
      currentTab: 'top-rated'
    }
  },
  created() {
    this.$store.dispatch(`MovieStore/setMovies`)
  },
  destroyed() {
    this.$store.dispatch(`Movie/clearMovies`)
  },
  methods: {
    changeTab(value) {
      this.currentTab = value
    }
  }
}
</script>

<style scoped>
.tab-option {
  display: inline;
}
</style>
