<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="11" md="11">
        <v-row v-if="posts.length">
          <v-col v-for="(post, i) in posts" :key="i" cols="12" sm="6">
            <card-flame :post="post" />
          </v-col>
        </v-row>
        <div v-else class="text-center">
          投稿された記事はありません。
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
const CardFlame = () => import('@/components/Organisms/CardFlame.vue')

export default {
  components: {
    CardFlame,
  },
  computed: {
    ...mapState(['posts']),
  },
}
</script>

<style lang="scss" scoped></style>
