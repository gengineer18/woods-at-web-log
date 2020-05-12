<template>
  <ul class="sns">
    <li class="sns--item">
      <div class="sns--icon-wrap">
        <a href="https://twitter.com/gengineer18" target="_blank">
          <icon-twitter :width="iconsize" :height="iconsize" />
        </a>
      </div>
    </li>
    <li class="sns--item">
      <div class="sns--icon-wrap">
        <a href="https://www.facebook.com/gen.senoo" target="_blank">
          <icon-facebook :width="iconsize" :height="iconsize" />
        </a>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
const IconTwitter = () => import('@/components/Atoms/IconTwitter.vue')
const IconFacebook = () => import('@/components/Atoms/IconFacebook.vue')

export default Vue.extend({
  components: {
    IconTwitter,
    IconFacebook,
  },
  computed: {
    iconsize(): number {
      return 50
    },
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
