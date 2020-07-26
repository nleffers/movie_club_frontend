<template>
  <div class="movies-wrapper">
    <div class="movies-tab-wrapper">
      <div
        class="tab-option"
        :class="{ active: currentTab == 'topRated' }"
        @click="changeTab('topRated')"
      >
        Top Rated
      </div>
      <div
        class="tab-option"
        :class="{ active: currentTab == 'popular' }"
        @click="changeTab('popular')"
      >
        Popular
      </div>
      <div
        class="tab-option"
        :class="{ active: currentTab == 'nowPlaying' }"
        @click="changeTab('nowPlaying')"
      >
        Now Playing
      </div>
      <div
        class="tab-option"
        :class="{ active: currentTab == 'upcoming' }"
        @click="changeTab('upcoming')"
      >
        Upcoming
      </div>
    </div>
    <div class="movies-index">
      <movie-row
        v-for="(movie, index) in openMovies"
        :movie="movie"
        :key="index"
        :ref="'user-movie-' + index"
      />
    </div>
  </div>
</template>

<script>
import MovieRow from '../shared/MovieRow.vue'

export default {
  components: {
    MovieRow
  },
  data() {
    return {
      currentTab: 'topRated'
    }
  },
  computed: {
    openMovies() {
      return this.$store.getters[`MovieStore/${this.currentTab}`]
    }
  },
  mounted() {
    this.$store.dispatch(`MovieStore/setMovies`)
  },
  destroyed() {
    this.$store.dispatch(`MovieStore/clearMovies`)
  },
  methods: {
    changeTab(value) {
      this.currentTab = value
    }
  }
}
</script>

<style scoped>
.movies-tab-wrapper {
  margin-bottom: 50px;
}

.movies-index {
  width: 50%;
  margin: auto;
}

.tab-option {
  border-color: #007bff;
  border-radius: 0 0 30px 30px;
  border-style: solid;
  color: #007bff;
  display: inline;
  padding: 15px 30px 15px 30px;
}

.active {
  background-color: #007bff;;
  color: white;
  font-weight: bold;
  padding-bottom: 30px;
}
</style>
