<template>
  <div class="list-item">
    <v-icon small color="#062883">{{ icon }}</v-icon>
    {{ name }} <template v-if="count">({{ count }})</template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: false,
      default: 0,
    },
  },
})
</script>

<style lang="scss" scoped>
.list-item {
  border-bottom: 2px solid $c-red;
}
</style>
