<template>
  <v-card>
    <aside-headline :title="title" :icon="icon" />
    <ul class="px-6 py-2">
      <li v-for="(day, i) in days" :key="i" class="my-3">
        <nuxt-link :to="link(day)" class="post-list">
          <aside-each-list-item
            :name="viewMonth(day)"
            :icon="icon"
            :count="relatedPostsCount(day, posts)"
          />
        </nuxt-link>
      </li>
    </ul>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import dayjs from 'dayjs'
import { Post } from '@/types/common.ts'
import 'dayjs/locale/ja'
dayjs.locale('ja')

const AsideHeadline = () => import('@/components/Molecules/AsideHeadline.vue')
const AsideEachListItem = () =>
  import('@/components/Atoms/AsideEachListItem.vue')

export default Vue.extend({
  components: {
    AsideHeadline,
    AsideEachListItem,
  },
  computed: {
    title(): string {
      return 'アーカイブ'
    },
    icon(): string {
      return 'mdi-calendar-today'
    },
    link(): (day: string) => string {
      return function (day: string) {
        return `/archives/${day}`
      }
    },
    days(): string[] {
      const postArray: Array<string> = this.posts.map((post: Post) =>
        dayjs(post.fields.date).format('YYYYMM')
      )
      const daysArray = postArray.filter(
        (x: string, i: number, self: string[]) => self.indexOf(x) === i
      )
      return daysArray
    },
    relatedPostsCount(): (day: string, posts: Post[]) => number {
      return function (day: string, posts: Array<Post>): number {
        return posts.filter(
          (post: Post) => dayjs(post.fields.date).format('YYYYMM') === day
        ).length
      }
    },
    viewMonth() {
      return function (days: string) {
        const year = days.substring(0, 4)
        const month = days.substring(4, 6)
        return `${year}年${month}月`
      }
    },
    ...mapState(['posts']),
  },
})
</script>

<style lang="scss" scoped>
ul,
li {
  list-style: none;
}
.post-list {
  text-decoration: none;
  color: black;
}
</style>
