export const themeData = {
  "hostname": "https://vuepress-theme-hope-v2-demo.mrhope.site",
  "author": {
    "name": "Mr.Hope",
    "url": "https://mrhope.site"
  },
  "iconPrefix": "iconfont icon-",
  "logo": "/logo.svg",
  "repo": "https://github.com/vuepress-theme-hope/vuepress-theme-hope",
  "docsDir": "demo/src",
  "navbar": [
    "/home",
    {
      "text": "Java面试指南",
      "icon": "java",
      "link": "/home"
    },
    {
      "text": "官方知识星球",
      "icon": "recommend",
      "link": "https://www.yuque.com/docs/share/8a30ffb5-83f3-40f9-baf9-38de68b906dc"
    }
  ],
  "sidebar": [
    {
      "text": "IDEA小技巧",
      "icon": "tips",
      "prefix": "idea-tips/",
      "collapsable": false,
      "children": [
        "idea-refractor-intro",
        "idea-plug-in-development-intro",
        "idea-source-code-reading-skills"
      ]
    },
    {
      "text": "IDEA插件推荐",
      "icon": "chajian1",
      "collapsable": false,
      "prefix": "idea-plugins/",
      "children": [
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
        "others"
      ]
    }
  ],
  "footer": "默认页脚",
  "displayFooter": true,
  "metaLocales": {
    "editLink": "在 GitHub 上编辑此页"
  },
  "blog": {
    "description": "一个前端开发者",
    "intro": "/intro.html",
    "medias": {
      "Baidu": "https://example.com",
      "Bitbucket": "https://example.com",
      "Dingding": "https://example.com",
      "Discord": "https://example.com",
      "Dribbble": "https://example.com",
      "Email": "https://example.com",
      "Evernote": "https://example.com",
      "Facebook": "https://example.com",
      "Flipboard": "https://example.com",
      "Gitee": "https://example.com",
      "GitHub": "https://example.com",
      "Gitlab": "https://example.com",
      "Gmail": "https://example.com",
      "Instagram": "https://example.com",
      "Lines": "https://example.com",
      "Linkedin": "https://example.com",
      "Pinterest": "https://example.com",
      "Pocket": "https://example.com",
      "QQ": "https://example.com",
      "Qzone": "https://example.com",
      "Reddit": "https://example.com",
      "Rss": "https://example.com",
      "Steam": "https://example.com",
      "Twitter": "https://example.com",
      "Wechat": "https://example.com",
      "Weibo": "https://example.com",
      "Whatsapp": "https://example.com",
      "Youtube": "https://example.com",
      "Zhihu": "https://example.com"
    },
    "articleInfo": [
      "Author",
      "Original",
      "Date",
      "Category",
      "Tag",
      "ReadingTime"
    ],
    "articlePerPage": 10,
    "sidebarDisplay": "mobile"
  },
  "encrypt": {
    "config": {
      "/guide/encrypt.html": [
        "$2a$10$mGPoAYz2KarkdMaydDO7.OM2zGZ4g3hFGQURuWAKyle3bCLheJiEO"
      ]
    },
    "global": false
  },
  "locales": {
    "/": {
      "lang": "zh-CN",
      "navbarLocales": {
        "langName": "简体中文",
        "selectLangText": "选择语言",
        "selectLangAriaLabel": "选择语言"
      },
      "metaLocales": {
        "prev": "上一页",
        "next": "下一页",
        "lastUpdated": "上次编辑于",
        "contributors": "贡献者",
        "editLink": "编辑此页"
      },
      "blogLocales": {
        "article": "文章",
        "articleList": "文章列表",
        "category": "分类",
        "tag": "标签",
        "timeline": "时间轴",
        "timelineTitle": "昨日不在",
        "all": "全部",
        "intro": "个人介绍",
        "star": "收藏",
        "slides": "幻灯片",
        "encrypt": "加密"
      },
      "outlookLocales": {
        "themeColor": "主题色",
        "darkmode": "外观",
        "fullscreen": "全屏"
      },
      "encryptLocales": {
        "title": "请输入密码",
        "errorHint": "请输入正确密码"
      },
      "routeLocales": {
        "404msg": [
          "这里什么也没有",
          "我们是怎么来到这儿的？",
          "这 是 四 零 四 !",
          "看起来你访问了一个失效的链接"
        ],
        "back": "返回上一页",
        "home": "带我回家"
      }
    }
  },
  "repoDisplay": true,
  "navbarIcon": true,
  "navbarAutoHide": "mobile",
  "hideSiteNameonMobile": true,
  "sidebarIcon": true,
  "headingDepth": 2,
  "pure": false,
  "darkmode": "auto-switch",
  "themeColor": {
    "red": "#e74c3c",
    "blue": "#3498db",
    "green": "#3eaf7c",
    "orange": "#f39c12",
    "purple": "#8e44ad"
  },
  "fullScreen": true
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
