import { defineConfig } from 'vitepress'

module.exports = {
  themeConfig: {
    repo: 'mcenahle/test', // GitHub 仓库的 URL
    docsDir: 'docs', // 文档所在目录，如果不是默认的 `docs` 目录，请更改此值
    editLinks: true, // 启用编辑链接
    editLinkText: '在 GitHub 上编辑此页', // 编辑链接的文本
  },
};


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
