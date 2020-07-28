<template>
  <div class="nav-bar">
    <b-navbar toggleable="md">
      <b-nav class="left-nav">
        <b-nav-item>
          <router-link :to="{ name: 'root_path', params: {} }">
            Movie Club
          </router-link>
        </b-nav-item>
        <b-nav-item v-if="isAuthenticated">
          <router-link :to="{ name: 'my_movies_path', params: {} }">
            My Movies
          </router-link>
        </b-nav-item>
        <b-nav-item-dropdown text="Browse">
          <b-dropdown-item>
            <router-link :to="{ name: 'movies_path', params: {} }">
              Movies
            </router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>

      <b-nav
        justified
        class="middle-nav"
      >
        <b-nav-form>
          <b-form-input
            v-model="searchInput"
            @keydown.enter.native="searchClick()"
            size="sm"
            class="mr-sm-6"
            type="text"
            placeholder="Search"
          />
        </b-nav-form>
      </b-nav>

      <b-navbar-nav class="ml-auto right-side">
        <template v-if="!isAuthenticated">
          <b-nav-item>
            <router-link :to="{ name: 'login_path', params: {} }">
              Join / Login
            </router-link>
          </b-nav-item>
        </template>
        <template v-else>
          <b-nav-item>
            <router-link :to="{ name: 'my_account_path', params: {} }">
              My Account
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <a
              class="sign-out"
              @click="onLogout"
            >Sign Out</a>
          </b-nav-item>
        </template>
      </b-navbar-nav>
    </b-navbar>
    <hr>
  </div>
</template>

<script>
import router from '@/router.js'
import movies from '@/requests/movies.js'

export default {
  data() {
    return {
      searchInput: ''
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters['UserInfoStore/isAuthenticated']
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('UserInfoStore/logout')
    },
    searchClick() {
      movies.searchMovies(this.searchInput)
        .then(response => {
          debugger
          this.$store.dispatch(`MovieStore/movieSearch`, response.data)

          if (this.$route.path !== '/search') {
            router.replace({ name: 'movie_search_path' })
          }

          this.searchInput = ''
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.nav-bar {
  margin-top: 15px;
  white-space: nowrap;
}

.sign-out {
  color: #007bff;
}
</style>
