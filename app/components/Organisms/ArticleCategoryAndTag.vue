<template>
  <div>
    <template v-if="post.fields.category">
      <nuxt-link :to="categoryLink(post)">
        <card-category
          :name="post.fields.category.fields.name"
          class="category-and-tags px-0 mb-2"
        />
      </nuxt-link>
    </template>
    <template v-for="tag in post.fields.tags">
      <nuxt-link :key="tag.sys.id" :to="tagLink(tag)">
        <card-tag :name="tag.fields.name" class="tags" />
      </nuxt-link>
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Post, Tag } from '@/types/common'

const CardTag = () => import('@/components/Atoms/CardTag.vue')
const CardCategory = () => import('@/components/Atoms/CardCategory.vue')

export default Vue.extend({
  components: {
    CardTag,
    CardCategory,
  },
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
  computed: {
    categoryLink(): (post: Post) => string {
      return function (post: Post): string {
        return `/categories/${post.fields.category.fields.slug}`
      }
    },
    tagLink(): (tag: Tag) => string {
      return function (tag: Tag): string {
        return `/tags/${tag.fields.slug}`
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.tags {
  display: inline;
  padding: 0 8px 0 0;
}
</style>
