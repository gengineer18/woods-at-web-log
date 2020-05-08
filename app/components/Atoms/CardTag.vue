<template>
  <v-chip :to="to" small label dark color="#e5012c" class="ma-1">
    <v-icon left size="18" color="white">
      mdi-tag
    </v-icon>
    <span class="font-weight-bold">{{ name }}</span>
  </v-chip>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { LinkTo } from '@/types/common'

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },
    to: {
      type: Object as PropType<LinkTo>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>
