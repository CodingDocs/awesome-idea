export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "主要功能与配置演示",
  "lang": "zh-CN",
  "frontmatter": {
    "icon": "creative",
    "category": [
      "使用指南"
    ],
    "summary": "主要功能与配置演示 页面展示; Markdown 展示; 禁用展示; 加密展示;",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/guide/"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "主要功能与配置演示"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
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
  "headers": [],
  "readingTime": {
    "minutes": 0.09,
    "words": 28
  },
  "filePathRelative": "guide/README.md"
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
