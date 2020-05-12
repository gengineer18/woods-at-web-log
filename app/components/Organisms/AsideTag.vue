<template>
  <v-card>
    <aside-headline :title="title" :icon="icon" />
    <ul class="px-6 py-2">
      <li v-for="(tag, i) in tags" :key="i" class="my-3">
        <nuxt-link :to="link(tag.fields.slug)" class="post-list">
          <aside-each-list-item :name="tag.fields.name" :icon="icon" />
        </nuxt-link>
      </li>
    </ul>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
const AsideHeadline = () => import('@/components/Molecules/AsideHeadline.vue')
const AsideEachListItem = () =>
  import('@/components/Atoms/AsideEachListItem.vue')

export default Vue.extend({
  components: {
    AsideHeadline,
    AsideEachListItem,
  },
  computed: {
    title(): string {
      return 'タグ'
    },
    icon(): string {
      return 'mdi-tag'
    },
    link() {
      return function (slug: string) {
        return `/tags/${slug}`
      }
    },
    ...mapState(['tags', 'posts']),
  },
})
</script>

<style lang="scss" scoped>
ul,
li {
  list-style: none;
}
.post-list {
  text-decoration: none;
  color: black;
}
</style>
