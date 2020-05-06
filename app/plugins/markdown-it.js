import MarkdownIt from 'markdown-it'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default ({ app }, inject) => {
  const md = new MarkdownIt({
    langPrefix: 'language-',
    preset: 'default',
    linkify: false,
    breaks: true,
    html: true,
    typegraphy: true,
  })

  md.use(require('markdown-it-toc'))
  md.use(require('markdown-it-div'))
  md.use(require('markdown-it-attrs'))

  inject('md', md)
}
