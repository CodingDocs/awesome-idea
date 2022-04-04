import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  dest: "./dist",
  title: "IDEA 高效使用指南",

  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",
      },
    ],
  ],
  themeConfig,
});
