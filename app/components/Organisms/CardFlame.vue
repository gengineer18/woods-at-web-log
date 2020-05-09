<template>
  <v-card max-width="400" class="mx-auto" nuxt :to="linkTo('posts', post)">
    <card-image
      :src="setEyeCatch(post).url"
      :alt="setEyeCatch(post).title"
    ></card-image>

    <card-title :title="post.fields.title" class="mt-2 mb-1" />

    <card-date :date="formatDate(post)" />

    <v-row>
      <v-col>
        <template v-if="post.fields.category">
          <card-category
            :name="post.fields.category.fields.name"
            class="category-and-tags"
          />
        </template>
        <template v-for="tag in post.fields.tags">
          <card-tag
            :key="tag.sys.id"
            :name="tag.fields.name"
            class="category-and-tags"
          />
        </template>
      </v-col>
    </v-row>

    <card-body :body="post.fields.body" class="pt-1 pb-3" />
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { mapState, mapGetters } from 'vuex'
import { post } from '@/types/common.ts'
const CardImage = () => import('@/components/Atoms/CardImage.vue')
const CardTitle = () => import('@/components/Atoms/CardTitle.vue')
const CardTag = () => import('@/components/Atoms/CardTag.vue')
const CardDate = () => import('@/components/Atoms/CardDate.vue')
const CardCategory = () => import('@/components/Atoms/CardCategory.vue')
const CardBody = () => import('@/components/Atoms/CardBody.vue')

export default Vue.extend({
  components: {
    CardImage,
    CardTitle,
    CardTag,
    CardDate,
    CardCategory,
    CardBody,
  },
  props: {
    post: {
      type: Object as PropType<post>,
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
  padding: 0 1rem;
}
.category-and-tags {
  display: inline;
  padding: 0 0 0 12px;
}
</style>
