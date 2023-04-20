// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'wosperry',
  tagline: '卷你大爷，快去打游戏',
  favicon: 'img/cat.ico',

  // Set the production url of your site here
  url: 'https://wosperry.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wosperry', // Usually your GitHub org/user name.
  projectName: 'wosperry', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  // ... Your other configurations.
  plugins: [
    ['docusaurus-plugin-yandex-metrica', {
      counterID: '731415926',
    }],
  ],
  // ... Your other configurations.
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'wosperry',
        logo: {
          alt: 'wosperry',
          src: 'img/cat.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '笔记',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/wosperry/doc.wosperry.com', 
            position: 'right',
            className: "header-github-link",
            "aria-label": "GitHub repository",
            
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '站内链接',
            items: [
              {
                label: '笔记 📖',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '其他账号',
            items: [
              {
                label: 'Bilibili',
                href: 'https://space.bilibili.com/34482248',
              },
              {
                label: '博客园',
                href: 'https://www.cnblogs.com/wosperry',
              },
            ],
          },
          {
            title: '仓库',
            items: [
              {
                label: 'Gitea',
                href: 'https://git.wosperry.com/wosperry/doc.wosperry.com',
              },
              {
                label: 'Gitee',
                href: 'https://gitee.com/wosperry/doc.wosperry.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/wosperry/doc.wosperry.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} wosperry.com, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'csharp', 'java']
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
};

module.exports = config;
