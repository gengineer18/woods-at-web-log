<template>
  <v-card-text>
    {{ replaceText($md.render(content)) }}
  </v-card-text>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  computed: {
    replaceText(): (content: string) => string {
      return (content: string) => {
        const replaced = content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
        const text =
          replaced.length <= 60 ? replaced : `${replaced.substring(0, 61)}...`
        return text
      }
    },
  },
})
</script>

<style lang="scss" scoped></style>
