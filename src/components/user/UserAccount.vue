<template>
  <div class="user-account">
    <div class="col-md-10 offset-md-1">
      <form @submit.prevent="submitJoin">
        <div class="form-group justify-content-center">
          <label for="username-field">Username</label>
          <input
            :class="{ invalid: $v.username.$invalid }"
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
            :class="{ invalid: $v.email.$invalid }"
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
        <div class="form-group">
          <button
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import users from '@/requests/users.js'
import { mapGetters } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, email, alpha } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      username: '',
      email: '',
      firstName:'',
      lastName: ''
    }
  },
  mixins: [validationMixin],
  validations: {
    username: {
      required,
      alpha
    },
    password: { required },
    email: {
      required,
      email
    }
  },
  created() {
    this.getUser()
  },
  computed: {
    currentUserId() {
      return this.$store.getters['UserInfoStore/id']
    }
  },
  methods: {
    getUser() {
      users.getUser(this.currentUserId)
        .then(response => {
          this.username = response.data.username
          this.email = response.data.email
          this.firstName = response.data.first_name
          this.lastName = response.data.last_name
        })
        .catch(err => {
          console.log(err)
        })
    },
    editUserField(value, method) {
      this.$store.dispatch(`UserInfoStore/${method}`, value)
    },
    submitJoin() {
      if (this.$v.$invalid) {
        this.$snotify.error(`Please ensure all required fields are filled and valid`)
        return
      }

      const formData = {
        id: this.id,
        username: this.username,
        email: this.email,
        first_name: this.firstName,
        last_name: this.lastName
      }
      this.$store.dispatch('UserInfoStore/updateUser', formData)
    }
  }
}
</script>

<style scoped>
.user-account {
  margin: auto;
  width: 80%;
}

.form-group {
  display: inline;
}

.form-group label {
  clear: both;
  float: left;
  margin-right: 15px;
  margin-top: 7px;
}

.form-group input {
  float: right;
  margin-top: 1px;
  width: 85%;
}

button {
  margin-top: 10px;
}

.invalid {
  color: red;
  background-color: #ffc9aa;
  border: 1px solid red;
}
</style>
