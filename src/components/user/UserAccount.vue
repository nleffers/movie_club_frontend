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
            :value="username"
            @input="editUserField($event.target.value, 'setUsername')"
          />
        </div>
        <div class="form-group">
          <label for="email-field">Email</label>
          <input
            type="text"
            class="form-control"
            id="email-field"
            placeholder="Email"
            :value="email"
            @input="editUserField($event.target.value, 'setEmail')"
          />
        </div>
        <div class="form-group">
          <label for="first-name-field">First Name</label>
          <input
            type="text"
            class="form-control"
            id="first-name-field"
            placeholder="First Name"
            :value="firstName"
            @input="editUserField($event.target.value, 'setFirstName')"
          />
        </div>
        <div class="form-group">
          <label for="last-name-field">Last Name</label>
          <input
            type="text"
            class="form-control"
            id="last-name-field"
            placeholder="Last Name"
            :value="lastName"
            @input="editUserField($event.target.value, 'setLastName')"
          />
        </div>
        <div class="form_option--check-block">
          <label for="email-notifications-field">Email Notifications</label>
          <input
            type="checkbox"
            class="form-control"
            id="email-notifications-field"
            :checked="emailNotifications"
            @input="editUserField($event.target.checked, 'setEmailNotifications')"
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
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('UserInfoStore', [
      'id',
      'username',
      'email',
      'firstName',
      'lastName',
      'emailNotifications'
    ])
  },
  methods: {
    editUserField(value, method) {
      this.$store.dispatch(`UserInfoStore/${method}`, value)
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
      this.$store.dispatch('UserInfoStore/updateUser', formData)
    }
  }
}
</script>
