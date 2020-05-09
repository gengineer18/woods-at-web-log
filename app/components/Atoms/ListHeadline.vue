<template>
  <h1 class="list-headline">
    <v-icon left large class="list-headline">{{ icon }}</v-icon>
    {{ headline }}
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    headline: {
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

<style lang="scss" scoped>
.list-headline {
  color: $c-blue;
  font-size: 28px;
}
</style>
