<template>
  <div>
    <template v-if="post.fields.category">
      <card-category
        :name="post.fields.category.fields.name"
        class="category-and-tags px-0 mb-2"
      />
    </template>
    <template v-for="tag in post.fields.tags">
      <card-tag :key="tag.sys.id" :name="tag.fields.name" class="tags" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Post } from '@/types/common'

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
})
</script>

<style lang="scss" scoped>
.tags {
  display: inline;
  padding: 0 8px 0 0;
}
</style>
