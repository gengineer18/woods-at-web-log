<template>
  <nuxt-link to="/" class="logo-link">
    <v-toolbar-title
      class="display-1 font-weight-bold logo-title"
      v-text="title"
    />
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    title(): string {
      return 'Woods At Web Log'
    },
  },
})
</script>

<style lang="scss" scoped>
.logo {
  &-title {
    color: $white;
  }
  &-link {
    text-decoration: none;
  }
}
</style>
