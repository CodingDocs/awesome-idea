export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "主页",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "icon": "home",
    "title": "主页",
    "heroImage": "/logo.svg",
    "heroText": "JavaGuide",
    "tagline": "「Java学习+面试指南」一份涵盖大部分 Java 程序员所需要掌握的核心知识。准备 Java 面试，首选 JavaGuide！",
    "action": [
      {
        "text": "开始阅读",
        "link": "/home/",
        "type": "primary"
      },
      {
        "text": "关于作者",
        "link": "/about-the-author/"
      }
    ],
    "summary": "👍官方知识星球 JavaGuide 官方知识星球来啦！！！如果你需要专属面试小册/一对一交流/简历修改/专属求职指南/学习打卡，不妨花 3 分钟左右看看星球的详细介绍： JavaGuide 知识星球详细介绍 （一定要确定自己真的需要再加入，一定要看完详细介绍之后再加我）。 用心做内容，真心希望帮助到你，拒绝知识付费割韭菜。加油！！！ 👉推荐阅读 Java",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "主页"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ],
      [
        "meta",
        {
          "name": "twitter:card",
          "content": "summary_large_image"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "👍官方知识星球",
      "slug": "👍官方知识星球",
      "children": []
    },
    {
      "level": 2,
      "title": "👉推荐阅读",
      "slug": "👉推荐阅读",
      "children": []
    },
    {
      "level": 2,
      "title": "🔥PDF 资源",
      "slug": "🔥pdf-资源",
      "children": []
    },
    {
      "level": 2,
      "title": "💡官方公众号",
      "slug": "💡官方公众号",
      "children": []
    },
    {
      "level": 2,
      "title": "📧联系我",
      "slug": "📧联系我",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.54,
    "words": 461
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
