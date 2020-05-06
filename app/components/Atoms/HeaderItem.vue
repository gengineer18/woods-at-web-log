<template>
  <v-btn :to="to" text>
    <span class="font-weight-bold">{{ name }}</span>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>
