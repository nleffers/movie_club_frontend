<template>
  <div>
  </div>
</template>

<script>
import movies from '@/requests/movies.js'

export default {
  props: {
    id: Number
  },
  created() {
    this.getMovie()
  },
  computed: {
    movie() {
      return this.$store.getters[`MovieStore/movie`]
    }
  },
  methods: {
    getMovie() {
      movies.getMovie(this.id)
      .then(response => {
        this.$store.dispatch(`MovieStore/setMovie`, response.data)
      })
    }
  }
}
</script>
