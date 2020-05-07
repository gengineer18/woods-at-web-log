<template>
  <aside class="aside-area">
    <aside-profile class="aside-area__child" />
    <aside-latest class="aside-area__child" />
    <aside-category class="aside-area__child" />
    <aside-tag class="aside-area__child" />
    <aside-archive class="aside-area__child" />
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'
const AsideProfile = () => import('@/components/Organisms/AsideProfile.vue')
const AsideLatest = () => import('@/components/Organisms/AsideLatest.vue')
const AsideCategory = () => import('@/components/Organisms/AsideCategory.vue')
const AsideTag = () => import('@/components/Organisms/AsideTag.vue')
const AsideArchive = () => import('@/components/Organisms/AsideArchive.vue')

export default Vue.extend({
  components: {
    AsideProfile,
    AsideLatest,
    AsideCategory,
    AsideTag,
    AsideArchive,
  },
})
</script>

<style lang="scss" scoped>
.aside-area {
  padding: 12px;
  &__child:not(:last-child) {
    margin-bottom: 24px;
  }
}
</style>
