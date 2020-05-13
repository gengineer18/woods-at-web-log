<template>
  <v-container fluid>
    <list-headline
      :headline="tag.fields.name"
      icon="mdi-tag"
      class="text-center"
    />
    <v-row justify="center">
      <v-col cols="12" sm="11" md="11">
        <v-row v-if="relatedPosts.length">
          <v-col v-for="(post, i) in relatedPosts" :key="i" cols="12" sm="6">
            <card-flame :post="post" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Post, Tag } from '@/types/common'

const ListHeadline = () => import('@/components/Atoms/ListHeadline.vue')
const CardFlame = () => import('@/components/Organisms/CardFlame.vue')

export default Vue.extend({
  components: {
    ListHeadline,
    CardFlame,
  },
  asyncData({ payload, params, error, store }) {
    const tag =
      payload ||
      store.state.tags.find((tag: Tag) => tag.fields.slug === params.slug)
    if (tag) {
      const relatedPosts: Post[] = store.getters.associatePosts(tag)
      return { tag, relatedPosts }
    } else {
      error({ statusCode: 400 })
    }
  },
})
</script>
