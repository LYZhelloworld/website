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
          { text: 'What is This Website?', link: 'introduction/what-is-this-website' },
          { text: 'Getting Started', link: 'introduction/getting-started' }
        ]
      },
      {
        text: 'Personal Profile',
        items: [
          { text: 'Profile', link: 'personal-profile/profile' },
          { text: 'Pinned Repositories', link: 'personal-profile/pinned-repositories' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LYZhelloworld' }
    ]
  }
})
