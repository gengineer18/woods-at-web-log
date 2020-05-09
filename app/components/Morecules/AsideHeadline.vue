<template>
  <section class="aside-headline py-4">
    <aside-title :title="title" :icon="icon" class="text-center" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
const AsideTitle = () => import('@/components/Atoms/AsideTitle.vue')

export default Vue.extend({
  components: {
    AsideTitle,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.aside-headline {
  background-color: $c-blue;
  color: $c-white;
}
</style>
