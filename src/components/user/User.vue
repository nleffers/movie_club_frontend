<template>
  <div class="row">
    <div class="col-md-8 offset-md-2">
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
import users from '@/requests/users.js'

export default {
  props: {
    id: [Number, String]
  },
  data() {
    return {
      username: '',
      email: '',
      firstName:'',
      lastName: '',
      emailNotifications: ''
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      users.getUser(this.id)
        .then(response => {
          this.username = response.data.username
          this.email = response.data.email
          this.firstName = response.data.first_name
          this.lastName = response.data.last_name
          this.emailNotifications = response.data.email_notifications
        })
        .catch(err => {
          console.log(err)
        })
    },
    submitJoin() {
      const formData = {
        id: this.id,
        username: this.username,
        email: this.email,
        first_name: this.firstName,
        last_name: this.lastName,
        email_notifications: this.emailNotifications
      }

      users.updateUser(formData)
    }
  }
}
</script>
