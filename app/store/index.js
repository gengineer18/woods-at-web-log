import dayjs from 'dayjs'
import defaultEyeCatch from '~/assets/images/defaultEyeCatch.png'
import client from '~/plugins/contentful'
import 'dayjs/locale/ja'
dayjs.locale('ja')

export const state = () => ({
  posts: [],
  categories: [],
  tags: [],
})

export const getters = {
  setEyeCatch: () => (post) => {
    if (!!post.fields.image && !!post.fields.image.fields) {
      return {
        url: `https:${post.fields.image.fields.file.url}`,
        title: post.fields.image.fields.title,
      }
    }
    return {
      url: defaultEyeCatch,
      title: 'defaultImage',
    }
  },
  draftChip: () => (post) => {
    if (!post.fields.date) return true
  },
  linkTo: () => (name, obj) => {
    return { name: `${name}-slug`, params: { slug: obj.fields.slug } }
  },
  formatDate: () => (post) => {
    return dayjs(post.fields.date).format('YYYY年MM月DD日')
  },
  relatedPosts: (state) => (category) => {
    return state.posts.filter(
      (post) => post.fields.category.sys.id === category.sys.id
    )
  },
  associatePosts: (state) => (currentTag) => {
    const posts = []
    for (let i = 0; i < state.posts.length; i++) {
      const post = state.posts[i]
      if (post.fields.tags) {
        const tag = post.fields.tags.find(
          (tag) => tag.sys.id === currentTag.sys.id
        )
        if (tag) {
          posts.push(post)
        }
      }
    }
    return posts
  },
}

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  },
  setLinks(state, entries) {
    state.tags = []
    state.categories = []
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i]
      if (entry.sys.contentType.sys.id === 'tag') {
        state.tags.push(entry)
      }
      if (entry.sys.contentType.sys.id === 'category') {
        state.categories.push(entry)
      }
    }
    state.categories.sort((a, b) => a.fields.sort - b.fields.sort)
  },
}

export const actions = {
  async getPosts({ commit }) {
    await client
      .getEntries({
        content_type: process.env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.date', // desc
        include: 1,
      })
      .then((res) => {
        commit('setLinks', res.includes.Entry)
        commit('setPosts', res.items)
      })
      .catch(console.error)
  },
}
