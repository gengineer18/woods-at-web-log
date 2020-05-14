<template>
  <v-container tag="section">
    <list-headline :headline="label.title" :icon="icon" class="text-center" />
    <v-form v-model="valid" method="post" netlify>
      <v-text-field v-show="false" name="form-name" />
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="name"
            :label="label.name"
            :rules="nameRules"
            name="name"
            autofocus
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="email"
            :label="label.email"
            :rules="emailRules"
            name="email"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
            v-model="message"
            :label="label.message"
            name="message"
            :rules="messageRules"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn :disabled="!valid" type="submit" color="#062883" outlined>
            <v-icon left>{{ icon }}</v-icon>
            Contact
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
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
  },
})
</script>

<style lang="scss" scoped></style>
