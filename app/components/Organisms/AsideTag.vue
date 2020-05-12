<template>
  <v-card>
    <aside-headline :title="title" :icon="icon" />
    <ul class="px-6 py-2">
      <li v-for="(tag, i) in tags" :key="i" class="my-3">
        <nuxt-link :to="link(tag.fields.slug)" class="post-list">
          <aside-each-list-item
            :name="tag.fields.name"
            :icon="icon"
            :count="relatedPostsCount(tag, posts)"
          />
        </nuxt-link>
      </li>
    </ul>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { Post, Tag } from '@/types/common.ts'
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
    relatedPostsCount(): (tag: Tag, posts: Post[]) => number {
      return function (tag: Tag, posts: Post[]): number {
        let length = 0
        const postTags = posts.map((post: Post) => post.fields.tags)
        for (let i = 0; i < postTags.length; i++) {
          const Tags = postTags[i]
          // postにタグが付与されていないものはundifinedになるため制御
          if (Tags) {
            for (let j = 0; j < Tags.length; j++) {
              if (Tags[j].sys.id === tag.sys.id) length++
            }
          }
        }
        return length
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
