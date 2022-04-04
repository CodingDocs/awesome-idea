import { defineThemeConfig } from "vuepress-theme-hope";
import { navbarConfig } from "./navbar";
import { sidebarConfig } from "./sidebar";

export default defineThemeConfig({
  title: "IDEA 高效使用指南",
  author: "Guide",
  logo: "/logo.svg",
  hostname: "https://codingdocs.github.io",
  repo: "CodingDocs/awesome-idea",
  docsDir: "docs",
  iconPrefix: "iconfont icon-",
  pure: true,
  navbar: navbarConfig,
  sidebar: sidebarConfig,

  pageInfo: ["Author", "Category", "Tag", "Date", "Original", "Word"],

  blog: {
    intro: "https://javaguide.cn/about-the-author/",
    sidebarDisplay: "mobile",
    medias: {
      Zhihu: "https://www.zhihu.com/people/javaguide",
      Github: "https://github.com/Snailclimb",
      Gitee: "https://gitee.com/SnailClimb",
    },
  },

  footer:
    '主题: <a href="https://vuepress-theme-hope.github.io/v2/">VuePress Theme Hope</a></br><a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2020015769号-1</a>',
  displayFooter: true,

  plugins: {
    blog: {
      autoExcerpt: true,
    },
    mdEnhance: {
      gfm: true,
    },
    feed: {
      json: true,
    },
    search: {
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    },
  },
});
