<template>
  <div>
    <div class="content-wrapper">
      <table>
        <thead>
          <tr>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <div v-for="(user, index) in users">
            <router-link :to="{ name: 'user_path', params: { id: user.id } }">
              <tr
                :key="index"
                :ref="'user-' + index"
              >
                <td>{{ user.username }}</td>
              </tr>
            </router-link>
          </div>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import users from '@/requests/users.js'

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    this.getUsers()
  },
  methods: {
    getUsers() {
      users.getUsers()
        .then(response => {
          this.users = response.data
        })
    }
  }
}
</script>
