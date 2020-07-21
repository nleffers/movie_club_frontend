<template>
  <b-navbar toggleable="md">
    <router-link :to="{ name: 'root_path', params: {} }">
      Movie Club
    </router-link>

    <b-nav
      justified
      class="middle-nav"
    >
      <b-nav-item>
        <router-link :to="{ name: 'root_path', params: {} }">
          Home
        </router-link>
      </b-nav-item>
      <b-nav-item v-if="isAuthenticated">
        <router-link :to="{ name: 'my_movies_path', params: {} }">
          My Movies
        </router-link>
      </b-nav-item>
      <b-nav-item-dropdown text="Community">
        <b-dropdown-item>
          <router-link :to="{ name: 'community_users_path', params: {} }">
            Users
          </router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link :to="{ name: 'community_top_movies_path', params: {} }">
            Top Movies
          </router-link>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>

    <b-nav class="ml-auto right-side">
      <div v-if="!isAuthenticated">
        <b-nav-item>
          <router-link :to="{ name: 'login_path', params: {} }">
            Join / Login
          </router-link>
        </b-nav-item>
      </div>
      <div v-else>
        <b-nav-item>
          <router-link :to="{ name: 'my_account_path', params: {} }">
            My Account
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <a @click="onLogout">Sign Out</a>
        </b-nav-item>
      </div>
    </b-nav>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      searchInput: ''
    }
  },
  computed: {
    ...mapGetters('UserInfoStore', [
      'isAuthenticated'
    ])
  },
  methods: {
    onLogout() {
      this.$store.dispatch('UserInfoStore/logout')
    },
    movieSearch() {
      movies.searchMovie(this.searchInput)
        .then(response => {
        })
    }
  }
}
</script>
