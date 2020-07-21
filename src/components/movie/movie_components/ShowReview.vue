<template>
  <div class="movie-review">
    <div>
      <p>Title: {{ review.title }}</p>
    </div>
    <div>
      <p>Blog: {{ review.blog }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    review: Object
  }
}
</script>
