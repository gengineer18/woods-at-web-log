<template>
  <ul class="px-6 py-2">
    <li v-for="(tag, i) in tags" :key="i" class="my-3">
      <nuxt-link :to="link(tag.fields.slug)" class="post-list">
        <aside-each-list-item :name="tag.fields.name" icon="mdi-tag" />
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Tag } from '@/types/common.ts'
const AsideEachListItem = () =>
  import('@/components/Atoms/AsideEachListItem.vue')

export default Vue.extend({
  components: {
    AsideEachListItem,
  },
  props: {
    tags: {
      type: Array as PropType<Tag[]>,
      required: true,
    },
  },
  computed: {
    link() {
      return function (slug: string) {
        return `/tags/${slug}`
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
