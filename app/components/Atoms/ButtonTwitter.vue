<template>
  <v-btn color="#4099ff" dark target="_blank" link :href="link">
    <v-icon left>mdi-twitter</v-icon>
    ツイート
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    link: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>
