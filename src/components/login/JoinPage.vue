<template>
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <div>
        <router-link :to="{ name: 'login_path', params: {} }">
          Already have an account? Log In
        </router-link>
      </div>
      <form @submit.prevent="submitJoin">
        <div class="form-group justify-content-center">
          <label for="username-field">Username</label>
          <input
            type="text"
            class="form-control"
            id="username-field"
            placeholder="Username"
            v-model="username"
          />
        </div>
        <div class="form-group">
          <label for="password-field">Password</label>
          <input
            type="password"
            class="form-control"
            id="password-field"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <div class="form-group">
          <label for="email-field">Email</label>
          <input
            type="text"
            class="form-control"
            id="email-field"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label for="first-name-field">First Name</label>
          <input
            type="text"
            class="form-control"
            id="first-name-field"
            placeholder="First Name"
            v-model="firstName"
          />
        </div>
        <div class="form-group">
          <label for="last-name-field">Last Name</label>
          <input
            type="text"
            class="form-control"
            id="last-name-field"
            placeholder="Last Name"
            v-model="lastName"
          />
        </div>
        <div class="form_option--check-block">
          <label for="email-notifications-field">Email Notifications</label>
          <input
            type="checkbox"
            class="form-control"
            id="email-notifications-field"
            v-model="emailNotifications"
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
      lastName: '',
      emailNotifications: false
    }
  },
  methods: {
    submitJoin() {
      const formData = {
        username: this.username,
        password: this.password,
        email: this.email,
        first_name: this.firstName,
        last_name: this.lastName,
        email_notifications: this.emailNotifications
      }
      this.$store.dispatch('AuthStore/createAndLogin', formData)
    }
  }
}
</script>

<style scoped>
.row {
  margin-top: 15%;
}
</style>
