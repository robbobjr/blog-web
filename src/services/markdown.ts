const hljs = require('highlight.js/lib/core')

hljs.registerLanguage(
  'javascript',
  require('highlight.js/lib/languages/javascript')
)

export const markdown = require('markdown-it')()
  .use(require('markdown-it-highlightjs'), { inline: true })