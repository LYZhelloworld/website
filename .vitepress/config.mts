import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hello, World!",
  description: "A personal website powered by VitePress",
  srcExclude: ['**/README.md'],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is This Website?', link: '/introduction/what-is-this-website' },
          { text: 'Getting Started', link: '/introduction/getting-started' }
        ]
      },
      {
        text: 'Profile',
        items: [
          { text: 'Personal Profile', link: '/profile/personal-profile' },
          { text: 'Pinned Repositories', link: '/profile/pinned-repositories' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LYZhelloworld' }
    ]
  }
})
