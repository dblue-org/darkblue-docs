import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Dark Blue',
  tagline: 'Dark Blue（深蓝）是一个开源的脚手架项目。提供了一系列的基础功能，包括用户管理、权限管理、日志查看、字典管理、系统参数管理等功能，帮助开发者快速构建应用。',
  favicon: 'img/logo-blue.svg',

  // Set the production url of your site here
  url: 'https://dblug.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dblug.org', // Usually your GitHub org/user name.
  projectName: 'darkblue', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
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
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    metadata: [
      {name: 'keywords', content: 'Spring Boot, 脚手架, 深蓝, Dark Blue, darkblue, 基础项目'},
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    zoom: {
      selector: '.markdown p > img, .markdown p > svg',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      }
    },
    navbar: {
      title: 'Dark Blue',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-blue.svg',
      },
      items: [
        {to: '/blog', label: '博客', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'projectDocs',
          position: 'left',
          label: '文档',
        },
        {
          type: 'docSidebar',
          sidebarId: 'angular',
          position: 'left',
          label: '前端（Angular）',
        },
        {
          href: 'https://github.com/dblue-org/darkblue-parent',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '快速开始-后端',
              to: '/docs/project-docs/quick-start',
            },
            {
              label: '快速开始-前端（Angular）',
              to: '/docs/angular/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Gitee',
              href: 'https://gitee.com/d-blue',
            },
            {
              label: 'Github',
              href: 'https://github.com/orgs/dblue-org/repositories',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DBLUE.ORG, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
