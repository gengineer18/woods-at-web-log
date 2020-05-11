<template>
  <v-card>
    <aside-headline :title="title" :icon="icon" />
    <aside-latest-list :posts="latestPosts" />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
const AsideHeadline = () => import('@/components/Molecules/AsideHeadline.vue')
const AsideLatestList = () =>
  import('@/components/Molecules/AsideLatestList.vue')

export default Vue.extend({
  components: {
    AsideHeadline,
    AsideLatestList,
  },
  computed: {
    title(): string {
      return '最新記事'
    },
    icon(): string {
      return 'mdi-pen'
    },
    ...mapGetters(['latestPosts', 'formatDate']),
  },
})
</script>

<style lang="scss" scoped></style>
