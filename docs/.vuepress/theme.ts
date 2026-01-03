import { getDirname, path } from "vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  author: "Guide",
  logo: "/logo.svg",
  favicon: "/favicon.ico",
  hostname: "https://codingdocs.github.io",
  repo: "CodingDocs/awesome-idea",
  docsDir: "docs",
  pure: true,
  breadcrumb: false,
  navbar,
  sidebar,
  footer:
    '主题: <a href="https://theme-hope.vuejs.press/zh/">VuePress Theme Hope</a></br><a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2020015769号-1</a>',
  displayFooter: true,
  pageInfo: ["Author", "Category", "Tag", "Original", "Word", "ReadingTime"],

  markdown: {
    align: true,
    codeTabs: true,
    gfm: true,
    include: {
      resolvePath: (file, cwd) => {
        if (file.startsWith("@"))
          return path.resolve(
            __dirname,
            "../snippets",
            file.replace("@", "./"),
          );

        return path.resolve(cwd, file);
      },
    },
    tasklist: true,
  },

 plugins: {
    blog: true,

    copyright: {
      author: "JavaGuide(javaguide.cn)",
      license: "MIT",
      triggerLength: 100,
      maxLength: 700,
      canonical: "https://javaguide.cn/",
      global: true,
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    icon: {
      assets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",
    },

    search: {
      isSearchable: (page) => page.path !== "/",
      maxSuggestions: 10,
    },
  },
});
