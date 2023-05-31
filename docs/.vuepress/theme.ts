import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  author: "Guide",
  logo: "/logo.svg",
  hostname: "https://codingdocs.github.io",
  repo: "CodingDocs/awesome-idea",
  docsDir: "docs",
  iconAssets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",
  pure: true,

  navbar,
  sidebar,

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
    '主题: <a href="https://theme-hope.vuejs.press/zh/">VuePress Theme Hope</a></br><a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2020015769号-1</a>',
  displayFooter: true,

  plugins: {
    blog: true,
    mdEnhance: {
      gfm: true,
    },
    feed: {
      json: true,
    },
  },
});
