---
title: IDEA 重构入门
category: IDEA 指南
tag:
  - IDEA
  - IDEA 插件
  - 重构入门
---

我们在使用 IDEA 进行重构之前，先介绍一个方便我们进行重构的快捷键: `Ctrl+t(Mac)/Ctrl+Shift+Alt+T`（如果忘记快捷键的话，鼠标右键也能找到重构选项），使用这个快捷键可以快速调出常用重构的选项，如下图所示:

![](./assets/refractor-help.png)

## 重命名(rename)

快捷键: `Shift + F6(Mac) / Shift + F6(Windows/Linux):` 对类、变量或者方法名重命名。

![重命名](./assets/rename.gif)

## 提取相关重构手段

这部分的快捷键实际很好记忆，我是这样记忆的:

前面两个键位是 `Command (⌘) + Option(⌥) (Mac) / Ctrl + Alt (Windows/Linux)` 是固定的，只有后面一个键位会变比如 Extract constant (提取变量)就是 c（constant）、Extract variable (提取变量)就是 v(variable)。

### 提取常量(extract constant)

1. **使用场景**: 提取未经过定义就直接出现的常量。提取常量使得你的编码更易读，避免硬编码。
2. **快捷键** : `Command (⌘) + Option(⌥) + c(Mac)/ Ctrl + Alt + c(Windows/Linux)`

**示例:**

![](./assets/exact/extract-constant.gif)

### 提取参数(exact parameter﻿)

1. **使用场景** : 提取参数到方法中。
2. **快捷键** :`Command (⌘) + Option(⌥) + p(Mac)/ Ctrl + Alt + P(Windows/Linux)`

![](./assets/exact/exact-parameter.gif)

### 提取变量(exact variable)

1. **使用场景**: 提取多次出现的表达式。
2. **快捷键:** `Command (⌘) + Option(⌥) + v(Mac) / Ctrl + Alt + V(Windows/Linux)`

**示例:**

![](./assets/exact/exact-variable.gif)

### 提取属性(exact field)

1. **使用场景**: 把当前表达式提取成为类的一个属性。
2. **快捷键:** `Command (⌘) + Option(⌥) + F(Mac) / Ctrl + Alt + F(Windows/Linux)`

**示例:**

![](./assets/exact/exact-field.gif)

**示例:**

![](./assets/exact/exact-variable.gif)

### 提取方法(exact method)

1. **使用场景**: 1 个或者多个表达式可以提取为一个方法。 提取方法也能使得你的编码更易读，更加语义化。
2. **快捷键:** `Command (⌘) + Option(⌥) + M(Mac)/ Ctrl + Alt + M(Windows/Linux)`

**示例:**

![](./assets/exact/exact-method.gif)

### 提取接口(exact interface)

1. **使用场景**: 想要把一个类中的 1 个或多个方法提取到一个接口中的时候。
2. **快捷键:** `Command (⌘) + Option(⌥) + M(Mac)/ Ctrl + Alt + M(Windows/Linux)`

**示例:**

![](./assets/exact/exact-interface.gif)
