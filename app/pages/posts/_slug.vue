<template>
  <v-container id="article-wrap" fluid>
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
          <v-divider class="my-4" />
          <div class="text-center">
            <button-twitter :link="linkTwitter" />
            <button-facebook :link="linkFacebook" />
          </div>
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
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import { Post } from '@/types/common'

const ButtonTwitter = () => import('@/components/Atoms/ButtonTwitter.vue')
const ButtonFacebook = () => import('@/components/Atoms/ButtonFacebook.vue')

interface DataType {
  currentPost: Post
}
interface MethodType {}
interface ComputedType {
  setEyeCatch: (
    post: any
  ) => {
    url: string
    title: any
  }
}
interface PropType {}

const ArticleCategoryAndTag = () =>
  import('@/components/Organisms/ArticleCategoryAndTag.vue')

export default Vue.extend({
  components: {
    ArticleCategoryAndTag,
    ButtonTwitter,
    ButtonFacebook,
  },
  async asyncData({ payload, store, params, error }) {
    const currentPost: Post =
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
    linkTwitter(): string {
      const url = 'https://blog.woodsatweb.com/posts'
      return `https://twitter.com/intent/tweet?url=${url}/${this.currentPost.fields.slug}&text=${this.currentPost.fields.title}`
    },
    linkFacebook(): string {
      const url = 'https://blog.woodsatweb.com/posts'
      return `https://www.facebook.com/sharer/sharer.php?u=${url}/${this.currentPost.fields.slug}`
    },
  },
  mounted() {
    const article = document.getElementById('article-wrap')
    const links = article ? article.getElementsByTagName('a') : []
    for (let i = 0; i < links.length; i++) {
      links[i].setAttribute('target', '_blank')
    }
  },
  head() {
    return {
      title: this.currentPost.fields.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.currentPost.fields.body.substring(0, 120),
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.currentPost.fields.title,
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://blog.woodsatweb.com/posts/${this.currentPost.fields.slug}`,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.setEyeCatch(this.currentPost).url,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.currentPost.fields.body.substring(0, 120),
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },

        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@gengineer18',
        },
      ],
    }
  },
} as ThisTypedComponentOptionsWithRecordProps<Vue, DataType, MethodType, ComputedType, PropType>)
</script>

<style lang="scss" scoped>
@import url(~/assets/scss/article.scss);
.share-area {
  font-size: 2rem;
  font-weight: bold;
  color: $c-blue;
}
</style>
