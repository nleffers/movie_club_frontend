<template>
  <div>
    <div class="content-wrapper">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>User Rating</th>
          </tr>
        </thead>
        <tbody>
          <div v-for="(movie, index) in movies">
            <router-link :to="{ name: 'movie_path', params: { id: movie.id } }">
              <tr
                :key="index"
                :movie="movie"
                :ref="'userMovie' + index"
              >
                <td>{{ movie.title }}</td>
                <td>{{ movie.user_rating }}</td>
              </tr>
            </router-link>
          </div>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    movies() {
      return this.$store.getters['UserInfoStore/movies']
    }
  }
}
</script>
