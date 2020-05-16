<template>
  <section id="privacy-wrap">
    <h1 class="mb-4 headline">プライバシーポリシー</h1>
    <ul>
      <li v-for="(privacy, i) in policies" :key="i">
        <h2>{{ privacy.fields.title }}</h2>
        <div v-html="$md.render(privacy.fields.privacy)"></div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import client from '~/plugins/contentful'
export default Vue.extend({
  layout: 'privacy',
  async asyncData() {
    const policies = await client
      .getEntries({
        content_type: process.env.CTF_PRIVACY_TYPE_ID,
        order: 'fields.order', // desc
        include: 1,
      })
      .then((res) => {
        return res.items
      })
    return { policies }
  },
  mounted() {
    const privacy = document.getElementById('privacy-wrap')
    const links = privacy ? privacy.getElementsByTagName('a') : []
    for (let i = 0; i < links.length; i++) {
      links[i].setAttribute('target', '_blank')
    }
  },
})
</script>

<style lang="scss" scoped>
ul,
li {
  list-style: none;
  padding: 0;
}
</style>
