<template>
  <div class="list-item">
    <v-icon small class="icon">{{ icon }}</v-icon>
    {{ name }}
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
  },
})
</script>

<style lang="scss" scoped>
.icon {
  color: $c-blue;
}
.list-item {
  border-bottom: 2px solid $c-red;
}
</style>
