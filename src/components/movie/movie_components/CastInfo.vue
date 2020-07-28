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
      <div class="character-name">{{ cast.character }}</div>
      <div class="actor-name">{{ cast.name }}</div>
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
  width: 30%;
  margin-left: 1.5%;
  margin-right: 1.5%;
  height: 500px;
  overflow-y: scroll;
}

.character-info {
  padding: 2px;
  display: inline-flex;
  width: 100%;
}

.profile-picture {
  float: left;
  padding: 1px;
  width: 94px;
}

.character-name {
  padding: 1px;
  width: calc(50% - 47px);
}

.actor-name {
  float: right;
  padding: 1px;
  width: calc(50% - 47px);
}
</style>
