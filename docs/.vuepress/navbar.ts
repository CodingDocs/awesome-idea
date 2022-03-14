import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/",
  "/home",
  { text: "Java面试指南", icon: "java", link: "/home" },
  {
    text: "官方知识星球",
    icon: "recommend",
    link: "https://www.yuque.com/docs/share/8a30ffb5-83f3-40f9-baf9-38de68b906dc",
  },
]);
