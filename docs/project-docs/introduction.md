---
title: 深蓝后端管理系统-项目文档-概述
sidebar_label: 概述
slug: introduction
sidebar_position: 1
keywords: [深蓝, 文档, 概述, spring boot, 管理系统, 脚手架]
tags: [文档, 后端]
---

# 概述

深蓝（Dark Blue）是一个后台管理系统的脚手架，提供了一系列的基础功能，包括用户管理、权限管理、日志查看、字典管理、系统参数管理等功能。采用前后端分离的方式开发，后端使用 Spring Boot、Spring Security、Spring Data JPA 等技术；前端使用 Angular、ng-zorro-antd、echarts等技术。

后续会推出 vue 版本的前端。

## 在线体验

:::warning
暂不提供在线预览功能，如需体验请在本地部署。
:::

## 项目地址

- Github：https://github.com/orgs/dblue-org/repositories
  - 后端：https://github.com/dblue-org/darkblue-parent
  - 前端（Angular）：https://github.com/dblue-org/darkblue-web-ui-ng

- Gitee：https://gitee.com/d-blue
  - 后端：https://gitee.com/d-blue/darkblue-parent
  - 前端（Angular）：https://gitee.com/d-blue/darkblue-web-ui-ng

:::tip
Github 上的 Issues 已关闭，提问请到 [Gitee](https://gitee.com/d-blue/darkblue-parent/issues)。
:::

## 功能列表

- 仪表盘
  - [x] 欢迎页面
  - [x] 自定义组件
- 系统管理
  - [x] 用户管理
  - [x] 用户组管理
  - [x] 职位管理
  - [x] 角色管理
  - [x] 菜单管理
  - [x] 权限管理
  - [x] 资源管理
  - 系统日志
    - [x] 登录日志
    - [x] 操作日志
  - 系统配置
    - [x] 配置参数管理
    - [x] 字典管理
  - 消息管理
    - [ ] 消息模板管理
    - [ ] 待办消息管理
    - [ ] 通知消息管理
- 运维中心
  - [x] 缓存管理

除消息管理外其他功能都已可以使用。消息管理功能会在 2.0 版本上线。1.x 版本主要是针对以上已经完成功能的优化，以及对以上模块的 BUG 的修复。

2.0 版本预计 2024年10月份开始开发。