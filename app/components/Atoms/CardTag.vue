<template>
  <v-card-text>
    <v-chip small label dark color="#e5012c" class="ma-1">
      <v-icon left size="18" color="white">
        mdi-tag
      </v-icon>
      <span class="font-weight-bold">{{ name }}</span>
    </v-chip>
  </v-card-text>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>
