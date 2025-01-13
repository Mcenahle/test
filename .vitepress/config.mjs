import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Minecraft Docs Website",
  description: "Minecraft Docs Website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Minecraft 官网', link: 'https://www.minecraft.net' },
      {
        text: "本站目录",
        items: [
          {
            text: "Minecraft 材质包下载与安装",
            link: "/install-datapacks",
          },
          {
            text: "Minecraft 光影下载与安装",
            link: "/install-shadowpacks",
          },
          {
            text: "Minecraft 存档下载与安装",
            link: "/install-saves",
          },
        ],
      },
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
          { text: 'Minecraft 材质包下载与安装', link: '/install-datapacks' },
          { text: 'Minecraft 光影下载与安装', link: '/install-shadowpacks' },
          { text: 'Minecraft 存档下载与安装', link: '/install-saves' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
