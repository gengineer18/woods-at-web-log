<template>
  <ul class="px-6 py-2">
    <li v-for="(post, i) in posts" :key="i" class="my-3">
      <nuxt-link :to="link(post.fields.slug)" class="post-list">
        <aside-latest-list-item
          :title="post.fields.title"
          icon="mdi-pen"
          :date="date(post.fields.date)"
        />
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Post } from '@/types/common.ts'
import { formatDate } from '@/utils/common.ts'
const AsideLatestListItem = () =>
  import('@/components/Atoms/AsideLatestListItem.vue')

export default Vue.extend({
  components: {
    AsideLatestListItem,
  },
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true,
    },
  },
  computed: {
    date() {
      return function (date: string) {
        return formatDate(date)
      }
    },
    link() {
      return function (slug: string) {
        return `/posts/${slug}`
      }
    },
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
