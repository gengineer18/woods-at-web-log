<template>
  <v-card-text>
    {{ date }}
  </v-card-text>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    date: {
      type: String,
      required: true,
      validator(value) {
        return /\d{4}年\d{1,2}月\d{1,2}日/.test(value)
      },
    },
  },
})
</script>

<style lang="scss" scoped></style>
