const path = require('path')

module.exports = {
  title: 'v-github-activity',
  base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/v-github-activity/' : '/',
  locales: {
    '/': {
      lang: 'en-US',
      description: 'vue github component'
    },
    '/es/': {
      lang: 'es-ES',
      description: 'componente de github para vue.js'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          { text: 'Guide', link: '/guide/', ariaLabel: 'Guide' },
          { text: 'Demo', link: '/demo/', ariaLabel: 'Demo' }
        ]
      },
      '/es/': {
        selectText: 'Lenguaje',
        label: 'Español',
        ariaLabel: 'Lenguaje',
        editLinkText: 'Edita esta pagina en GitHub',
        nav: [
          { text: 'Guía', link: '/es/guide/', ariaLabel: 'Guía' },
          { text: 'Demo', link: '/es/demo/', ariaLabel: 'Demo' }
        ]
      }
    },
    repo: 'amaury-tobias/v-github-activity',
    docsRepo: 'amaury-tobias/v-github-activity',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    sidebar: 'auto'
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: [
          path.resolve(__dirname, '../../src/components/'),
          path.resolve(__dirname, '../../src/components/events/')
        ]
      }
    ]
  ]
}
