<template>
  <v-app-bar fixed app dark elevate-on-scroll class="nav-bar">
    <v-spacer />
    <header-logo />
    <v-spacer />
    <header-items :items="items" />
    <v-spacer />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
// import HeaderLogo from '@/components/Atoms/HeaderLogo.vue'
// import HeaderItems from '@/components/Morecules/HeaderItems.vue'

const HeaderLogo = () => import('@/components/Atoms/HeaderLogo.vue')
const HeaderItems = () => import('@/components/Morecules/HeaderItems.vue')

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
          to: '/category/freelance',
        },
        {
          name: 'フロントエンド',
          to: '/category/frontend',
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
</style>
