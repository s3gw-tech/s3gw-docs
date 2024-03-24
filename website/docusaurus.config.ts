import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as DocPlugin from "@docusaurus/plugin-content-docs";
import type * as ThemePlugin from "@docusaurus/theme-classic";
import {
  decisionsItemGenerator,
  decisionsPrefixParser,
} from "./src/utils/decisions-parser";

const config: Config = {
  title: "S3GW Documentation",
  tagline: "",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.s3gw.tech",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "s3gw-tech", // Usually your GitHub org/user name.
  projectName: "s3gw-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  onDuplicateRoutes: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [],

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        path: "../s3gw/docs/guide",
        routeBasePath: "/",
        sidebarPath: "./sidebarsDocs.ts",
      } satisfies DocPlugin.Options,
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "decisions",
        path: "../s3gw/docs/decisions",
        routeBasePath: "/decisions",
        sidebarPath: "./sidebarsDecisions.ts",
        numberPrefixParser: decisionsPrefixParser,
        sidebarItemsGenerator: decisionsItemGenerator,
        sidebarCollapsed: false,
        sidebarCollapsible: false,
      } satisfies DocPlugin.Options,
    ],
    [
      "@docusaurus/theme-classic",
      {
        customCss: ["./src/css/custom.css"],
      } satisfies ThemePlugin.PluginOptions,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "S3GW",
      logo: {
        alt: "s3gw logo",
        src: "img/logo-no-text.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Documentation",
        },
        {
          label: "Decisions",
          position: "left",
          to: "/decisions",
          sidebarId: "decisions",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
