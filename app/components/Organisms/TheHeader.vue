<template>
  <v-app-bar fixed app dark elevate-on-scroll class="nav-bar">
    <v-spacer class="spacer-nav" />
    <header-logo />
    <v-spacer class="d-pc" />
    <header-items :items="items" class="d-pc" />
    <v-spacer class="spacer-nav" />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
const HeaderLogo = () => import('@/components/Atoms/HeaderLogo.vue')
const HeaderItems = () => import('@/components/Molecules/HeaderItems.vue')

export default Vue.extend({
  components: {
    HeaderLogo,
    HeaderItems,
  },
  computed: {
    items() {
      return [
        {
          name: 'フリーランス',
          to: '/categories/freelance',
        },
        {
          name: 'フロントエンド',
          to: '/categories/frontend',
        },
        {
          name: 'お問い合わせ',
          to: '/contact',
        },
      ]
    },
  },
})
</script>

<style lang="scss" scoped>
.nav-bar {
  background: linear-gradient(270deg, $c-red 0%, $c-blue 30%);
}
.spacer-nav {
  max-width: 180px;
}
</style>
