<template>
  <v-app>
    <the-header />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2020 Woods At Web</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeader from '@/components/Organisms/TheHeader.vue'
export default Vue.extend({
  components: {
    TheHeader,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify',
    }
  },
})
</script>
