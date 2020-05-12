<template>
  <figure>
    <img
      src="~assets/images/facebook.png"
      alt="facebook"
      :width="width"
      :height="height"
    />
  </figure>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>
