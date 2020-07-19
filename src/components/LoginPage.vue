<template>
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <form @submit.prevent="submitLogin">
        <div class="form-group justify-content-center">
          <label for="username-field">Username</label>
          <input
            type="text"
            class="form-control"
            id="username-field"
            placeholder="Enter Username"
            v-model="username"
          />
        </div>
        <div class="form-group">
          <label for="password-field">Password</label>
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
      this.$store.dispatch('AuthStore/loginAndGetInfo', formData)
    }
  }
}
</script>

<style scoped>
.row {
  margin-top: 15%;
}
</style>
