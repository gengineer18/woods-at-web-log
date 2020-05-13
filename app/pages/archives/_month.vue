<template>
  <v-container fluid>
    <list-headline
      :headline="displayMonth(archive)"
      icon="mdi-calendar-today"
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
import dayjs from 'dayjs'
import { Post } from '@/types/common.ts'
import 'dayjs/locale/ja'
dayjs.locale('ja')

const ListHeadline = () => import('@/components/Atoms/ListHeadline.vue')
const CardFlame = () => import('@/components/Organisms/CardFlame.vue')

export default Vue.extend({
  components: {
    ListHeadline,
    CardFlame,
  },
  async asyncData({ payload, store, params, error }) {
    const archive: Post =
      payload ||
      (await store.state.posts.find(
        (post: Post) =>
          dayjs(post.fields.date).format('YYYYMM') === params.month
      ))

    if (archive) {
      const relatedPosts: Post[] = store.getters.archivePosts(params.month)
      return { archive, relatedPosts }
    } else {
      return error({ statusCode: 400 })
    }
  },
  computed: {
    displayMonth(): (post: Post) => string {
      return (post: Post): string => {
        return dayjs(post.fields.date).format('YYYY年MM月')
      }
    },
  },
})
</script>
