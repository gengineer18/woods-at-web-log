<template>
  <v-card max-width="400" class="mx-auto" nuxt :to="linkTo('posts', post)">
    <card-image
      :src="setEyeCatch(post).url"
      :alt="setEyeCatch(post).title"
    ></card-image>

    <card-date :date="formatDate(post)" class="my-2 pl-2" />

    <v-row>
      <v-col>
        <template v-if="post.fields.category">
          <card-category
            :name="post.fields.category.fields.name"
            class="category mb-2"
          />
        </template>
        <template v-for="tag in post.fields.tags">
          <card-tag
            :key="tag.sys.id"
            :name="tag.fields.name"
            class="tags mb-2"
          />
        </template>
      </v-col>
    </v-row>

    <v-divider class="my-2" />

    <card-body :body="post.fields.body" class="pt-1 pb-3" />
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { mapState, mapGetters } from 'vuex'
import { Post } from '@/types/common.ts'
const CardImage = () => import('@/components/Atoms/CardImage.vue')
const CardTag = () => import('@/components/Atoms/CardTag.vue')
const CardDate = () => import('@/components/Atoms/CardDate.vue')
const CardCategory = () => import('@/components/Atoms/CardCategory.vue')
const CardBody = () => import('@/components/Atoms/CardBody.vue')

export default Vue.extend({
  components: {
    CardImage,
    CardTag,
    CardDate,
    CardCategory,
    CardBody,
  },
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
  computed: {
    ...mapState(['posts']),
    ...mapGetters(['setEyeCatch', 'linkTo', 'formatDate']),
  },
})
</script>

<style lang="scss" scoped>
.card--content {
  padding: 0 8px;
}
.category {
  padding: 0 0 0 8px;
}
.tags {
  display: inline;
  padding: 0 0 0 8px;
}
</style>
