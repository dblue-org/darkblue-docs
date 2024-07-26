---
title: 深蓝后端管理系统-项目文档-功能介绍
sidebar_label: 功能介绍
sidebar_position: 4
keywords: [深蓝, 文档, 架构, spring boot, 管理系统, 脚手架]
tags: [文档, 后端]
---

# 功能介绍

功能列表如下：

- 仪表盘
    - [x] 欢迎页面 ![version](https://img.shields.io/badge/1.0.0-green)
    - [x] 自定义组件 ![version](https://img.shields.io/badge/1.0.0-green)
- 系统管理
    - [x] 用户管理 ![version](https://img.shields.io/badge/1.0.0-green)
    - [x] 用户组管理 ![version](https://img.shields.io/badge/1.0.0-green)
    - [x] 职位管理 ![version](https://img.shields.io/badge/1.0.0-green)
    - [x] 角色管理 ![version](https://img.shields.io/badge/1.0.0-green)
    - [x] 菜单管理 ![version](https://img.shields.io/badge/1.0.0-green)
    - [x] 权限管理 ![version](https://img.shields.io/badge/1.0.0-green)
    - [x] 资源管理 ![version](https://img.shields.io/badge/1.0.0-green)
    - 系统日志
        - [x] 登录日志 ![version](https://img.shields.io/badge/1.0.0-green)
        - [x] 操作日志 ![version](https://img.shields.io/badge/1.0.0-green)
    - 系统配置
        - [x] 配置参数管理 ![version](https://img.shields.io/badge/1.0.0-green)
        - [x] 字典管理 ![version](https://img.shields.io/badge/1.0.0-green)
- 消息管理
    - [ ] 消息模板管理 ![version](https://img.shields.io/badge/2.0.0-gray)
    - [ ] 待办消息管理 ![version](https://img.shields.io/badge/2.0.0-gray)
    - [ ] 通知消息管理 ![version](https://img.shields.io/badge/2.0.0-gray)
- 运维中心
    - [x] 缓存管理 ![version](https://img.shields.io/badge/1.0.0-green)

## 一些 UI 上的约定

- 一般情况下某个功能的查询页面中，点击表格中的名称（一般为超链接蓝色文字）可以跳转到对应的详情页面。
- 删除功能与修改功能通常在表格中，不在详情页面添加这些功能。
- 删除通过 Popconfirm（气泡确认框） 组件提醒删除动作。

## 模块

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```