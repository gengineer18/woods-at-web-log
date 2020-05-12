<template>
  <v-card>
    <aside-headline :title="title" :icon="icon" />
    <aside-profile-image />
    <aside-profile-name />
    <aside-profile-explanation class="px-4 py-2" />
    <aside-sns-list class="px-4 pb-2" />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
const AsideHeadline = () => import('@/components/Molecules/AsideHeadline.vue')
const AsideProfileImage = () =>
  import('@/components/Atoms/AsideProfileImage.vue')
const AsideProfileName = () => import('@/components/Atoms/AsideProfileName.vue')
const AsideProfileExplanation = () =>
  import('@/components/Atoms/AsideProfileExplanation.vue')
const AsideSnsList = () => import('@/components/Molecules/AsideSnsList.vue')

export default Vue.extend({
  components: {
    AsideHeadline,
    AsideProfileImage,
    AsideProfileName,
    AsideProfileExplanation,
    AsideSnsList,
  },
  computed: {
    title(): string {
      return 'プロフィール'
    },
    icon(): string {
      return 'mdi-account'
    },
  },
})
</script>

<style lang="scss" scoped></style>
