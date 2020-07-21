<template>
  <div class="movie-review">
    <div>
      <label>Title</label>
      <input :value="review.title"></input>
    </div>
    <div>
      <label>Blog</label>
      <textarea :value="review.blog"></textarea>
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
