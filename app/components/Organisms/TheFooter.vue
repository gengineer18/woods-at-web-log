<template>
  <v-footer color="#062883" app dark>
    <v-spacer />
    <span>Copyright &copy; 2020 Woods At Web</span>
    &nbsp; | &nbsp;
    <span
      ><nuxt-link to="/privacy" class="to-privacy"
        >プライバシーポリシー</nuxt-link
      ></span
    >
    <v-spacer />
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
</style>
