const envPath = `config/.env.${process.env.ENV || 'local'}`
require('dotenv').config({ path: envPath })
const envSet = process.env
const client = require('./app/plugins/contentful').default

export default {
  mode: 'universal',
  srcDir: 'app',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Woods At Web Log',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Woods At Webの公式ブログ。フロントエンドエンジニアについて、フリーランスエンジニアについての記事を中心に、妹尾 弦の好きなものについて様々な記事を書いていきます。',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Woods At Web log',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#e5012c' },
  /*
   ** Global CSS
   */
  css: ['ress'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['plugins/contentful', 'plugins/components', 'plugins/markdown-it'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics',
    '@nuxtjs/markdownit',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: [
      '~/assets/scss/variables.scss',
      '~/assets/scss/overwrite.scss',
    ],
    theme: {
      dark: false,
    },
  },
  googleAnalytics: {
    id: 'UA-xxxxxxxxx-x',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
  },
  env: envSet,
  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: process.env.CTF_BLOG_POST_TYPE_ID,
        }),
        client.getEntries({
          content_type: 'category',
        }),
        client.getEntries({
          content_type: 'tag',
        }),
      ]).then(([posts, categories, tags]) => {
        return [
          ...posts.items.map((post: any) => {
            return {
              route: `posts/${post.fields.slug}`,
              payload: post,
            }
          }),
          ...categories.items.map((category: any) => {
            return {
              route: `categories/${category.fields.slug}`,
              payload: category,
            }
          }),
          ...tags.items.map((tag: any) => {
            return { route: `tags/${tag.fields.slug}`, payload: tag }
          }),
        ]
      })
    },
  },
  router: {
    middleware: ['getContentful'],
  },
}
