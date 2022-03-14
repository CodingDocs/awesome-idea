import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig([
  {
    text: "IDEA小技巧",
    icon: "tips",
    prefix: "idea-tips/",
    collapsable: false,
    children: [
      "idea-refractor-intro",
      "idea-plug-in-development-intro",
      "idea-source-code-reading-skills",
    ],
  },
  {
    text: "IDEA插件推荐",
    icon: "chajian1",
    collapsable: false,
    prefix: "idea-plugins/",
    children: [
      "shortcut-key",
      "idea-themes",
      "improve-code",
      "interface-beautification",
      "camel-case",
      "code-glance",
      "code-statistic",
      "git-commit-template",
      "gson-format",
      "idea-features-trainer",
      "jclasslib",
      "maven-helper",
      "rest-devlop",
      "save-actions",
      "sequence-diagram",
      "translation",
      "others",
    ],
  },
]);
