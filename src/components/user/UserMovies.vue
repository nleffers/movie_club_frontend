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
          <router-link :to="{ name: 'login_path', params: {} }">
            <tr
              v-for="(movie, index) in movies"
              :key="index"
              :movie="movie"
              :ref="'userMovie' + index"
            >
              <td>{{ movie.title }}</td>
              <td>{{ movie.user_rating }}</td>
            </tr>
          </router-link>
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
  },
  methods: {
  }
}
</script>
