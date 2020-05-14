<template>
  <v-footer app dark class="text-center" padless>
    <v-card flat tile width="100%" color="#062883" class="text-center">
      <v-card-text class="footer-content">
        <nuxt-link to="/privacy" class="to-privacy">
          プライバシーポリシー
        </nuxt-link>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text footer-content">
        Copyright &copy; 2020 Woods At Web
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.to-privacy {
  text-decoration: none;
  color: $c-white;
}
.footer-content {
  margin: 12px auto;
}
</style>
