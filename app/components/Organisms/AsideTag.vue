<template>
  <v-card>
    <aside-headline :title="title" :icon="icon" />
    <aside-tag-list :tags="tags" />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
const AsideHeadline = () => import('@/components/Morecules/AsideHeadline.vue')
const AsideTagList = () => import('@/components/Morecules/AsideTagList.vue')

export default Vue.extend({
  components: {
    AsideHeadline,
    AsideTagList,
  },
  computed: {
    title(): string {
      return 'タグ'
    },
    icon(): string {
      return 'mdi-tag'
    },
    ...mapState(['tags']),
  },
})
</script>

<style lang="scss" scoped></style>
