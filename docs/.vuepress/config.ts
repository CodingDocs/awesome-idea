import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";

import theme from "./theme.js";

export default defineUserConfig({
  dest: "./dist",

  title: "IDEA 高效使用指南",
  lang: "zh-CN",

  theme,

  plugins: [
    searchProPlugin({
      indexContent: true,
    }),
  ],
});
