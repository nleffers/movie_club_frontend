<template>
  <div class="trailers-column">
    <div
      v-for="(trailer, index) in trailers"
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
</template>

<script>
export default {
  props: {
    trailers: Array
  },
  methods: {
    changeTrailerManually(value) {
      this.$emit('changeTrailerManually', value)
    }
  }
}
</script>

<style scoped>
.trailers-column {
  cursor: pointer;
  height: 360px;
  float: right;
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
  width: calc(100% - 640px);
}

.trailer-not-playing-row {
  border: 1px solid black;
  border-radius: 10px;
  margin: 2px;
  height: 117px;
  padding: 30px 5px 20px 10px;
}

.trailer-not-playing-row p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.5rem;
}
</style>
