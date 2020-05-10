<template>
  <v-card>
    <aside-headline :title="title" :icon="icon" />
    <aside-category-list :categories="categories" />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
const AsideHeadline = () => import('@/components/Morecules/AsideHeadline.vue')
const AsideCategoryList = () =>
  import('@/components/Morecules/AsideCategoryList.vue')

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
