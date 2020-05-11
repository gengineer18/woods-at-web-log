<template>
  <v-card>
    <aside-headline :title="title" :icon="icon" />
    <aside-category-list :categories="categories" />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
const AsideHeadline = () => import('@/components/Molecules/AsideHeadline.vue')
const AsideCategoryList = () =>
  import('@/components/Molecules/AsideCategoryList.vue')

export default Vue.extend({
  components: {
    AsideHeadline,
    AsideCategoryList,
  },
  computed: {
    title(): string {
      return 'カテゴリ'
    },
    icon(): string {
      return 'mdi-folder'
    },
    ...mapState(['categories']),
  },
})
</script>

<style lang="scss" scoped></style>
