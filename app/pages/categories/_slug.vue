<template>
  <v-container fluid>
    <list-headline
      :headline="category.fields.name"
      icon="mdi-folder"
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
import { Post, Category } from '@/types/common.ts'

const ListHeadline = () => import('@/components/Atoms/ListHeadline.vue')
const CardFlame = () => import('@/components/Organisms/CardFlame.vue')

export default Vue.extend({
  components: {
    ListHeadline,
    CardFlame,
  },
  async asyncData({ payload, store, params, error }) {
    const category: Category =
      payload ||
      (await store.state.categories.find(
        (category: Category) => category.fields.slug === params.slug
      ))

    if (category) {
      const relatedPosts: Post[] = store.getters.relatedPosts(category)
      return { category, relatedPosts }
    } else {
      return error({ statusCode: 400 })
    }
  },
})
</script>
