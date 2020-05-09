<template>
  <v-img :src="src" :alt="alt" :aspect-ratio="16 / 9" max-height="200"> </v-img>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>
