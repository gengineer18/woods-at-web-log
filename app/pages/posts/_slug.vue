<template>
  <v-container fluid>
    <v-card class="pa-4">
      <template v-if="currentPost">
        <p>
          <v-icon color="#e5012c">mdi-book-open-page-variant</v-icon>
          {{ formatDate(currentPost) }}
        </p>
        <v-img
          :src="setEyeCatch(currentPost).url"
          :alt="setEyeCatch(currentPost).title"
        />
        <article-category-and-tag :post="currentPost" class="my-2" />
        <v-divider />
        <article class="mt-4">
          <div
            class="article-body"
            v-html="$md.render(currentPost.fields.body)"
          ></div>
        </article>
      </template>

      <template v-else>
        お探しの記事は見つかりませんでした。
      </template>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Post } from '@/types/common'

const ArticleCategoryAndTag = () =>
  import('@/components/Organisms/ArticleCategoryAndTag.vue')

export default Vue.extend({
  components: {
    ArticleCategoryAndTag,
  },
  async asyncData({ payload, store, params, error }) {
    const currentPost =
      payload ||
      (await store.state.posts.find(
        (post: Post) => post.fields.slug === params.slug
      ))

    if (currentPost) {
      return {
        currentPost,
        category: currentPost.fields.category,
      }
    } else {
      return error({ statusCode: 400 })
    }
  },
  computed: {
    ...mapGetters(['setEyeCatch', 'draftChip', 'linkTo', 'formatDate']),
  },
})
</script>

<style lang="scss" scoped>
@import url(~/assets/scss/article.scss);
</style>
