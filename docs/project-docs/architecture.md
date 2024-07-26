---
title: 深蓝后端管理系统-项目文档-系统架构
sidebar_label: 系统架构
slug: architecture
sidebar_position: 3
keywords: [深蓝, 文档, 架构, spring boot, 管理系统, 脚手架]
tags: [文档, 后端]
---

# 系统架构

本项目目前主要针对单体项目，技术架构比较简单。同时本项目也是对 DDD（领域驱动模型） 架构的一次尝试，因为我们发现在一些复杂的项目中原来的 MVC 三层架构会有很大的问题，随着需求的不断迭代代码会快速变得混乱且难以维护。因此我们尝试使用 DDD 架构来解决这一问题。同时也希望形成我们的实践经验，并在本项目的文档中专门增加针对 DDD 的一些文章来帮助开发者更好的了解 DDD。

当然您也可以选择不使用 DDD 而是使用普通的 MVC 模式。无论如何选择都不影响您使用本项目。

![系统架构](/img/docs/architecture/architecture.png)