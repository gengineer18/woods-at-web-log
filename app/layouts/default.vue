<template>
  <v-app>
    <the-header />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer fixed app>
      <span>&copy; 2020 Woods At Web</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
const TheHeader = () => import('@/components/Organisms/TheHeader.vue')

export default Vue.extend({
  components: {
    TheHeader,
  },
})
</script>
