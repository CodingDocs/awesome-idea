import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  base: "/awesome-idea/",

  dest: "./dist",

  title: "IDEA 高效使用指南",

  locales: {
    "/": {
      lang: "zh-CN",
    },
  },

  themeConfig,
});
