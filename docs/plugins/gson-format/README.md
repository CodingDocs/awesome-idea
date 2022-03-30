---
title: |-
  GsonFormat: JSON转对象
category: IDEA 指南
tag:
  - IDEA
  - IDEA 插件
---

## GsonFormat

GsonFormat 这个插件可以根据 Gson 库使用的要求，将 JSONObject 格式的 String 解析成实体类。

::: note

2021.x 版本以上的 IDEA 可以使用 GsonFormatPlus。

:::

使用起来非常简单，我们新建一个类，然后在类中使用快捷键 `option + s` (Mac) 或 `alt + s` (win) 调出操作窗口（**必须在类中使用快捷键才有效**），如下图所示。

![gson-format2](./assets/gson-format2.png)

![gson-format3](./assets/gson-format3.png)

这个插件是一个国人几年前写的，不过已经很久没有更新了，可能会因为 IDEA 的版本问题有一些小 Bug。而且，这个插件无法将 JSON 转换为 Kotlin（这个其实无关痛痒，IDEA 自带的就有 Java 转 Kotlin 的功能）。

![gson-format1](./assets/gson-format1.png)

## RoboPOJOGenerator

另外一个与之相似的插件是 **RoboPOJOGenerator** ，这个插件的更新频率比较快。

`File-> new -> Generate POJO from JSON`

![RoboPOJOGenerator1](./assets/RoboPOJOGenerator1.png)

然后将 JSON 格式的数据粘贴进去之后，配置相关属性之后选择“_Generate_”

![RoboPOJOGenerator2](./assets/RoboPOJOGenerator2.png)
