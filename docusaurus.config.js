// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Minima Documentation',
  tagline: 'Dinosaurs are cool',
  url: 'https://arnimedia.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'arnimedia', // Usually your GitHub org/user name.
  projectName: 'arnimedia.github.io', // Usually your repo name.

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Minima Documentation',
        logo: {
          alt: 'Minima',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'about/vision',
            position: 'left',
            label: 'Vision',
          },
          {
            type: 'doc',
            docId: 'about/vision',
            position: 'left',
            label: 'Learn',
          },
          {
            type: 'doc',
            docId: 'runanode',
            position: 'left',
            label: 'Run a node',
          },
          {to: '/blog', label: 'Incentive Program', position: 'left'},
          {
            href: 'https://minima.global/get-involved#community',
            label: 'Community',
            position: 'right',
          },
          {
            href: 'https://github.com/minima-global',
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
                label: 'Introduction',
                to: 'docs/about/vision',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/minima',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/Minima_Global',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Minima_Global',
              },
            ],
          },
          {
            title: 'Devs',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/minima-global',
              },
            ],
          },
        ],
        copyright: `All rights reserved Minima Ltd © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
