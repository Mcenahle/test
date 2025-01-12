import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Minecraft Docs",
  description: "Minecraft Docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
  { text: '主页', link: '/' },
  { text: 'Examples', link: '/markdown-examples' },
  {
    text: "其他网站",
    items: [
      {
        text: "个人主页",
        link: "https://www.mcenahle.sh.cn",
      },
      {
        text: "个人博客",
        link: "https://blog.mcenahle.sh.cn",
      },
    ],
  },
],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
