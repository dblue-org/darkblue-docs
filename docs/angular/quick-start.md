---
title: 深蓝后端管理系统-前端 Angular-快速开始
sidebar_label: 快速开始
slug: quick-start
sidebar_position: 2
keywords: [深蓝, 文档, 概述, Angular]
tags: [文档, 前端]
---

# 快速开始

下载项目

```shell
git clone https://gitee.com/d-blue/darkblue-web-ui-ng.git
```

执行 `ng serve` 启动项目，浏览器中打开 `http://localhost:4200/` 即可访问项目。

使用 `ng build` 打包生产环境代码。

## 接口地址配置

接口地址在环境变量文件中配置，文件位置 `src/environments`。修改 `environment.development.ts` 中的 `apiUrl` 即可。

## 多环境配置 {#multiple-profiles}

目前提供了3套环境，开发环境、测试环境、生产环境。环境配置在 `src/environments` 下。

- 开发环境
    - 配置文件：`src/environments/environment.development.ts`
    - 打包命令：`ng build:dev`
- 测试环境
    - 配置文件：`src/environments/environment.testing.ts`
    - 打包命令：`ng build:test`
- 生产环境
    - 配置文件：`src/environments/environment.ts`
    - 打包命令：`ng build`

**如何添加新的环境？**

如要添加一个 `stable` 环境。

1. 首先在 `src/environments` 添加一个 `environment.stable.ts` 文件，注意命名。
2. 将 `environment.development.ts` 中的内容复制到 `environment.stable.ts` 文件内。
3. 修改 `angular.json` 的 `architect` -> `configurations` 下，增加下面的内容
  ```
  "stable": {
    "optimization": false,
    "extractLicenses": false,
    "sourceMap": true,
    "fileReplacements": [
      {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.stable.ts"
      }
    ]
  },
  ```
4. 修改 `package.json`，在 `scripts` 中增加：`"build:stable": "ng build --configuration stable",`

完成上面的配置之后就可以使用 `npm run build:stable` 来打包 `stable` 的代码了。
