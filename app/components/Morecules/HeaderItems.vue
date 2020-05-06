<template>
  <div>
    <template v-for="(item, i) in items">
      <header-item :key="i" :name="item.name" :to="item.to" class="mr-4" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import HeaderItem from '@/components/Atoms/HeaderItem.vue'

type PropItem = {
  name: string
  to: string
}

export default Vue.extend({
  components: {
    HeaderItem,
  },
  props: {
    items: {
      type: Array as PropType<PropItem[]>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>
