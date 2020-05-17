<template>
  <div>
    <h4 class="text-center">＼Follow me!／</h4>
    <ul class="sns">
      <li class="sns--item">
        <div class="sns--icon-wrap">
          <icon-twitter />
        </div>
      </li>
      <li class="sns--item">
        <div class="sns--icon-wrap">
          <icon-facebook />
        </div>
      </li>
      <li class="sns--item">
        <div class="sns--icon-wrap">
          <icon-github />
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const IconTwitter = () => import('@/components/Atoms/IconTwitter.vue')
const IconFacebook = () => import('@/components/Atoms/IconFacebook.vue')
const IconGithub = () => import('@/components/Atoms/IconGithub.vue')

export default Vue.extend({
  components: {
    IconTwitter,
    IconFacebook,
    IconGithub,
  },
})
</script>

<style lang="scss" scoped>
.sns {
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: center;
  &--item {
    margin: 0 12px;
  }
  &--icon-wrap {
    text-align: center;
    width: calc(100% / 3);
  }
}
</style>
