<template>
  <v-card>
    <aside-headline :title="title" :icon="icon" />
    <ul class="px-6 py-2">
      <li v-for="(category, i) in categories" :key="i" class="my-3">
        <nuxt-link :to="link(category.fields.slug)" class="post-list">
          <aside-each-list-item
            :name="category.fields.name"
            icon="mdi-folder"
            :count="relatedPostsCount(category, posts)"
          />
        </nuxt-link>
      </li>
    </ul>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { Post, Category } from '@/types/common.ts'
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
      return 'カテゴリ'
    },
    icon(): string {
      return 'mdi-folder'
    },
    link() {
      return function (slug: string) {
        return `/categories/${slug}`
      }
    },
    relatedPostsCount(): (category: Category, posts: Post[]) => number {
      return function (category: Category, posts: Array<Post>): number {
        return posts.filter(
          (post: Post) => post.fields.category.sys.id === category.sys.id
        ).length
      }
    },
    ...mapState(['categories', 'posts']),
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
