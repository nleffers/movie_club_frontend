<template>
  <div class="cast-info-column">
    <div
      v-for="cast in casts"
      class="character-info"
    >
      <div class="profile-picture">
        <template v-if="cast.profile_path">
          <img :src="cast.profile_path" alt="Profile"/>
        </template>
        <template v-else>
          No Picture
        </template>
      </div>
      <div class="actor-name">{{ cast.name }}</div>
      <div class="character-name">{{ cast.character }}</div>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    casts: Array,
    isAuthenticated: Boolean
  }
}
</script>

<style scoped>
.cast-info-column {
  border: 1px solid black;
  border-radius: 5px;
  height: 500px;
  margin-left: 1.5%;
  margin-right: 1.5%;
  overflow-y: scroll;
  width: 30%;
}

.character-info {
  padding: 5px;
  display: inline-flex;
  width: 100%;
}

.profile-picture {
  float: left;
  padding: 1px;
  width: 94px;
}

.character-name {
  margin: auto;
  padding: 1px;
  width: calc(50% - 47px);
}

.actor-name {
  float: right;
  margin: auto;
  padding: 1px;
  width: calc(50% - 47px);
}
</style>
