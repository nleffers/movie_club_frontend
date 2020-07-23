<template>
  <tr>
    <td>
      <router-link :to="{ name: 'movie_path', params: { id: movie.id } }">
        {{ movie.title }}
      </router-link>
    </td>
    <td>
      <router-link :to="{ name: 'movie_path', params: { id: movie.id } }">
        {{ movie.vote_average }}
      </router-link>
    </td>
    <td>
      <router-link :to="{ name: 'movie_path', params: { id: movie.id } }">
        {{ movie.vote_count }}
      </router-link>
    </td>
    <template v-if="movie.user_rating">
      <td>
        <router-link :to="{ name: 'movie_path', params: { id: movie.id } }">
          {{ movie.user_rating }}
        </router-link>
      </td>
    </template>
  </tr>
</template>

<script>
export default {
  props: {
    movie: Object
  }
}
</script>
