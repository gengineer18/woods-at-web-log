<template>
  <h1 class="aside-title">
    <v-icon left color="#fff">{{ icon }}</v-icon>
    {{ title }}
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>
