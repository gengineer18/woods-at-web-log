<template>
  <v-card-text>
    {{ replaceText($md.render(body)) }}
  </v-card-text>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    body: {
      type: String,
      required: true,
    },
  },
  computed: {
    replaceText(): (body: string) => string {
      return (body: string) => {
        const replaced = body.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
        const text =
          replaced.length <= 60 ? replaced : `${replaced.substring(0, 61)}...`
        return text
      }
    },
  },
})
</script>

<style lang="scss" scoped></style>
