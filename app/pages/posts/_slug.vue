<template>
  <v-container fluid>
    <template v-if="currentPost">
      <breadcrumbs :add-items="addBreadcrumbs" />
      {{ currentPost.fields.title }}
      <v-img
        :src="setEyeCatch(currentPost).url"
        :alt="setEyeCatch(currentPost).title"
        :aspect-ratio="16 / 9"
        width="700"
        height="400"
        class="mx-auto"
      />
      {{ formatDate(currentPost) }}
      <draft-chip v-if="draftChip(currentPost)" /><br />
      <div v-html="$md.render(currentPost.fields.body)"></div>
    </template>

    <template v-else>
      お探しの記事は見つかりませんでした。
    </template>

    <div>
      <v-btn outlined color="primary" to="/">
        <v-icon size="16">
          fas fa-angle-double-left
        </v-icon>
        <span class="ml-1">ホームへ戻る</span>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import DraftChip from '~/components/posts/DraftChip'

export default {
  components: {
    DraftChip,
  },
  async asyncData({ payload, store, params, error }) {
    const currentPost =
      payload ||
      (await store.state.posts.find((post) => post.fields.slug === params.slug))

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
    addBreadcrumbs() {
      return [
        {
          icon: 'mdi-folder-outline',
          text: this.category.fields.name,
          to: this.linkTo('categories', this.category),
        },
      ]
    },
  },
}
</script>
