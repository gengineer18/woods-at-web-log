<template>
  <v-app>
    <the-header />
    <v-content>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="12" md="8" xl="6">
            <nuxt />
          </v-col>
          <v-col cols="12" sm="12" md="4" xl="3">
            <the-aside />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <the-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
const TheHeader = () => import('@/components/Organisms/TheHeader.vue')
const TheAside = () => import('@/components/Organisms/TheAside.vue')
const TheFooter = () => import('@/components/Organisms/TheFooter.vue')

export default Vue.extend({
  components: {
    TheHeader,
    TheAside,
    TheFooter,
  },
})
</script>

<style lang="scss" scoped></style>
