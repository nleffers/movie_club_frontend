<template>
  <div class="log-in-page">
    <div class="col-md-8 offset-md-2">
      <div>
        <router-link :to="{ name: 'join_path', params: {} }">
          New user? Create an account
        </router-link>
      </div>
      <form @submit.prevent="submitLogin">
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
        <button
          type="submit"
          class="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import router from '@/router.js'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitLogin() {
      const formData = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('UserInfoStore/login', formData)
      router.replace({ name: 'root_path' })
    }
  }
}
</script>

<style scoped>
.log-in-page {
  margin: auto;
  width: 80%;
}

.form-group {
  display: inline;
}

.form-group input {
  margin-top: 5px;
  float: right;
}

button {
  margin-top: 10px;
}
</style>
