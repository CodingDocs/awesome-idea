import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig([
  {
    text: "技巧",
    prefix: "/tips/",
    collapsable: false,
    children: "structure",
  },
  {
    text: "插件",
    prefix: "/plugins/",
    children: [
      "shortcut-key",
      "themes",
      "improve-code",
      "interface-beautification",
      "camel-case/",
      "code-glance/",
      "code-statistic/",
      "git-commit-template/",
      "gson-format/",
      "jclasslib/",
      "maven-helper",
      "rest/",
      "sequence-diagram/",
      "translation/",
      "others",
    ],
  },
]);
