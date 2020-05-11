<template>
  <ul class="px-6 py-2">
    <li v-for="(category, i) in categories" :key="i" class="my-3">
      <nuxt-link :to="link(category.fields.slug)" class="post-list">
        <aside-each-list-item :name="category.fields.name" icon="mdi-folder" />
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Category } from '@/types/common.ts'
const AsideEachListItem = () =>
  import('@/components/Atoms/AsideEachListItem.vue')

export default Vue.extend({
  components: {
    AsideEachListItem,
  },
  props: {
    categories: {
      type: Array as PropType<Category[]>,
      required: true,
    },
  },
  computed: {
    link() {
      return function (slug: string) {
        return `/categories/${slug}`
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
