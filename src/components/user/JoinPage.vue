<template>
  <div class="join-page">
    <div class="col-md-8 offset-md-2">
      <div>
        <router-link :to="{ name: 'login_path', params: {} }">
          Already have an account? Log In
        </router-link>
      </div>
      <form @submit.prevent="submitJoin">
        <div class="form-group justify-content-center">
          <input
            type="text"
            class="form-control"
            id="username-field"
            placeholder="Username"
            v-model="username"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="password-field"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="email-field"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="first-name-field"
            placeholder="First Name"
            v-model="firstName"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="last-name-field"
            placeholder="Last Name"
            v-model="lastName"
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
      password: '',
      email: '',
      firstName: '',
      lastName: ''
    }
  },
  methods: {
    submitJoin() {
      const formData = {
        username: this.username,
        password: this.password,
        email: this.email,
        first_name: this.firstName,
        last_name: this.lastName
      }
      this.$store.dispatch('UserInfoStore/createAndLogin', formData)
    }
  }
}
</script>

<style scoped>
.join-page {
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
