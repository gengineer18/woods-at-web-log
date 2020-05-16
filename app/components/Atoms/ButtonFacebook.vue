<template>
  <v-btn color="#1977f2" dark target="_blank" link :href="link">
    <v-icon left>mdi-facebook</v-icon>
    シェア
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
