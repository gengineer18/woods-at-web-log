<template>
  <v-card>
    <aside-headline :title="title" />
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
const AsideHeadline = () => import('@/components/Morecules/AsideHeadline.vue')

export default Vue.extend({
  components: {
    AsideHeadline,
  },
  computed: {
    title(): string {
      return 'アーカイブ'
    },
  },
})
</script>

<style lang="scss" scoped></style>