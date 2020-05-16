<template>
  <div class="list-item">
    <v-icon small color="#062883">{{ icon }}</v-icon>
    {{ title }} / {{ date }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    date: {
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
.list-item {
  border-bottom: 2px solid $c-red;
}
</style>
