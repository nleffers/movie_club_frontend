<template>
  <div class="nav-bar">
    <div class="nav-bar-contents">
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
          <b-nav-item>
            <router-link :to="{ name: 'movies_path', params: {} }">
              Movies
            </router-link>
          </b-nav-item>
        </b-nav>

        <b-nav justified class="middle-nav">
          <b-nav-form>
            <b-form-input
              v-model="searchInput"
              size="sm"
              class="mr-sm-6"
              type="text"
              placeholder="Search"
            />
            <b-button
              size="sm"
              class="search-button"
              type="submit"
              @click.prevent="searchClick"
            />
          </b-nav-form>
        </b-nav>

        <b-navbar-nav class="ml-auto right-side">
          <template v-if="!isAuthenticated">
            <b-nav-item>
              <div class="log-in-option" @click.stop.prevent="toggleLogInMenu">
                Join / Log In
              </div>
            </b-nav-item>
            <div
              v-if="showLogInMenu"
              ref="logInMenu"
              class="log-in-menu-wrapper"
              tabindex="-1"
              v-click-outside="toggleLogInMenu"
            >
              <router-link
                class="join-link"
                :to="{ name: 'join_path', params: {} }"
                @click="toggleLogInMenu"
              >
                New? Join Now!
              </router-link>
              <div class="form-group justify-content-center">
                <input
                  type="text"
                  class="form-control"
                  id="username-field"
                  placeholder="Enter Username"
                  v-model="username"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="password-field"
                  placeholder="Enter Password"
                  v-model="password"
                />
              </div>
              <div class="login-button" @click.prevent="submitLogin">
                Log In
              </div>
            </div>
          </template>
          <template v-else>
            <b-nav-item>
              <router-link :to="{ name: 'my_account_path', params: {} }">
                My Account
              </router-link>
            </b-nav-item>
            <b-nav-item>
              <a class="sign-out" @click="onLogout">Sign Out</a>
            </b-nav-item>
          </template>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import router from "@/router.js";
import movies from "@/requests/movies.js";

export default {
  data() {
    return {
      username: "",
      password: "",
      searchInput: "",
      showLogInMenu: false,
    };
  },
  directives: {
    ClickOutside,
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters["UserInfoStore/isAuthenticated"];
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch("UserInfoStore/logout");
    },
    searchClick() {
      movies
        .searchMovies(this.searchInput)
        .then((response) => {
          this.$store.dispatch(`MovieStore/movieSearch`, response.data);
          this.searchInput = "";
          router.replace({ name: "movie_search_path" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submitLogin() {
      const formData = {
        username: this.username,
        password: this.password,
      };
      this.username = "";
      this.password = "";
      this.$store.dispatch("UserInfoStore/login", formData);
      this.showLogInMenu = false;
    },
    toggleLogInMenu() {
      this.showLogInMenu = !this.showLogInMenu;
    },
  },
};
</script>

<style scoped>
.nav-bar {
  white-space: nowrap;
  background-image: linear-gradient(#bbb, #ddd);
  border-bottom: 1px solid #ccc;
}

.nav-bar-contents {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}

.log-in-option,
.sign-out {
  color: #007bff;
}

.log-in-menu-wrapper {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 200px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  z-index: 1;
  right: 10px;
  top: 50px;
  padding: 5px;
}

.log-in-menu-wrapper input {
  margin: 2px;
}

.search-button {
  visibility: hidden;
}

.join-link {
  margin: auto;
}

.login-button {
  background: #007bff;
  border: 1px solid #007bff;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: inline-block;
  margin: auto;
  margin-bottom: 5px;
  padding: 5px 15px;
  text-align: center;
}
</style>
