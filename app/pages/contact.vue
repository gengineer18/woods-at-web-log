<template>
  <v-container tag="section">
    <list-headline :headline="label.title" :icon="icon" class="text-center" />
    <v-form v-if="!submitted" v-model="valid" method="post" netlify>
      <v-text-field v-show="false" name="form-name" />
      <v-text-field
        v-model="name"
        :label="label.name"
        :rules="nameRules"
        name="name"
        autofocus
      />
      <v-text-field
        v-model="email"
        :label="label.email"
        :rules="emailRules"
        name="email"
      />

      <v-textarea
        v-model="message"
        :label="label.message"
        name="message"
        :rules="messageRules"
      />
      <v-text-field
        v-show="false"
        v-model="botfield"
        label="人間は入力しないでください"
      />
      <v-btn :disabled="!valid" color="#062883" outlined @click="submit">
        <v-icon left>{{ icon }}</v-icon>
        Contact
      </v-btn>
    </v-form>
    <div v-if="submitted">
      <p>お問い合わせありがとうございました。</p>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { VForm } from '@/types/common.ts'
const ListHeadline = () => import('@/components/Atoms/ListHeadline.vue')

export default Vue.extend({
  components: {
    ListHeadline,
  },
  data() {
    return {
      valid: true,
      name: '',
      nameRules: [(v: string) => !!v || 'お名前は必須項目です。'],
      email: '',
      emailRules: [
        (v: string) => !!v || 'メールアドレスは必須項目です。',
        (v: string) =>
          /.+@.+\..+/.test(v) || 'メールアドレスの項目で入力してください。',
      ],
      message: '',
      messageRules: [(v: string) => !!v || 'メッセージは必須項目です。'],
      botfield: '',
      submitted: false,
    }
  },
  computed: {
    label() {
      return {
        title: 'お問い合わせ',
        name: 'お名前',
        email: 'メールアドレス',
        message: 'メッセージ',
      }
    },
    icon(): string {
      return 'mdi-send'
    },
    isEmpty(): boolean {
      if (this.name !== '' && this.email !== '' && this.message !== '') {
        return false
      }
      return true
    },
    form(): VForm {
      return this.$refs.form as VForm
    },
  },
  methods: {
    validate() {
      const form = this.form
      form.validate()
    },
    async submit() {
      const params = new FormData()
      // 以下、ダミーフォームの各フォーム要素のnameと合わせる
      params.append('form-name', 'contact')
      params.append('name', this.name)
      params.append('email', this.email)
      params.append('message', this.message)
      params.append('bot-field', this.botfield)

      const response = await this.$axios.$post(window.location.origin, params)
      // 実際はresponseを使って画面側にフィードバックさせるが、ここでは仮にconsoleに出力
      if (response) {
        this.submitted = true
      }
    },
  },
})
</script>

<style lang="scss" scoped></style>
