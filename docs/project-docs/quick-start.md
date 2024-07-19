---
title: 深蓝后端管理系统-项目文档-快速开始
sidebar_label: 快速开始
slug: quick-start
sidebar_position: 2
keywords: [深蓝, 文档, spring boot, 管理系统, 脚手架, 快速开始, quick start]
tags: [文档, 后端]
---

# 快速开始

本系统暂不提供可以直接部署的版本，需要自行打包部署。

## 安装环境

**后端**

- JDK 21 及以上版本
- MySQL 8.x

**前端**

- Angular 18.x
- Node：18.9.1 及以上版本
- TypeScript： 5.4.0以上，5.6.0以下
- RxJS： 6.5.3 以上 7.4.0 以下

[Angular 版本兼容说明](https://angular.dev/reference/versions)

## 下载

```shell
git clone https://gitee.com/d-blue/darkblue-parent.git
git clone https://gitee.com/d-blue/darkblue-web-ui-ng.git
```

darkblue-parent 是后端项目，darkblue-web-ui-ng 是前端项目。

## 启动项目

### 数据库初始化

数据库脚本在 `darkblue-parent/darkblue-application/src/main/resources/init.sql`。

配置好之后需要在 `application-dev.yaml` 中设置数据库信息。

```yaml
spring:
  datasource:
    url: jdbc:mysql://192.168.7.133:3306/darkblue?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8
    username: root
    password: 123456
```

### 启动后端

注意后端使用的 JDK 版本是 21，由于使用了 Spring 3.x 因此 JDK 版本需要使用 17 及以上版本。

在启动项目之前请先编译项目。

```shell
mvn compile
```

或通过 IDEA 右侧的 Maven 工具栏编译。

![编译项目](https://jaune162.oss-cn-hangzhou.aliyuncs.com/images/blog/20240717/cf84651e13b74844809d5655426087ac.png)

配置完成之后即可启动项目。

启动类：`org.dblue.application.DarkblueApplication`

### 启动前端

建议使用最新的 Node 和 npm 已避免出现兼容性问题。

如果要使用阿里的 npm 源，请在根目录添加 `.npmrc` 文件。文件内容如下：

```
registry=https://registry.npmmirror.com
```

Node 和 npm 准备好之后，先安装 npm 包

```
npm install
```

安装完成之后通过下面的命令启动项目

```
npm run start
```

启动完之后，在浏览器输入：http://localhost:4200 即可打开项目。

![登录页面](https://jaune162.oss-cn-hangzhou.aliyuncs.com/images/blog/20240717/01866b61013e43cb85d5b1ce3434055d.png)


管理员账户默认用户名密码为：admin/123456