# 巴比轮

一款零代码3D网页开发工具。

## 下载

1. 下载已构建版本
- [babylun-macos-arm64.zip](https://github.com/bblun/bblun/releases/download/v0.5.0/bblun-macos-arm64.zip)
- [babylun-win.zip](https://github.com/bblun/bblun/releases/download/v0.5.0/bblun-win.zip)

2. 从代码运行
- 下载[源码](https://github.com/bblun/bblun/archive/refs/tags/v0.5.0.zip)
- 安装[Deno](http://deno.com)
- 启动服务：从命令行执行命令`deno -A serve.js`，或者执行脚本`run.bat`(win)或`run.sh`(macos)。
- 脚本会打开系统默认浏览器，推荐使用谷歌chrome浏览器作为开发浏览器。

## 资源

- [示例](https://github.com/bblun/examples/)
- [插件](https://github.com/bblun/plugins/)

## 名称由来

这款软件名为巴比轮，因为底层是微软开源游戏引擎[BabylonJS](https://babylonjs.com/)。另外，也有历史轮转之意。

巴比伦是一个因奢靡、堕落而被毁灭的文明古国，英语`babylon`有奢华淫靡的大都市之意，在宗教经典中它更是邪恶的代名词。人们总喜欢追忆过去的辉煌，却记不住历史的教训；古希腊、古楼兰、庞贝古城无一不是因为道德败坏、亵渎神明而覆灭的古代文明；中国历史上的朝代更迭也多是发生在统治者荒淫无道、民不聊生的时候。历史的车轮循环往复，愿人能修身重德，自求多福。

## 产品简介

巴比轮是专为3D设计师打造的零代码3D网页开发工具。用户可将巴比轮用于学习、教学，无需支付任何授权费用；工具没有任何功能限制；没有任何收费项目；开放插件系统，易于扩展功能。

本软件实质是将`BabylonJS`代码片段包装为拼图，供没有编程经验的设计师使用，因为只做了这么简单的一点事，所以能够免费发布出来，让更多人受益。

## 为什么需要？

要把自己的3D作品发布到网上，很多人选择3D模型托管云服务平台（如sketchfab），但是类似的云服务多以展示为主，能够实现的交互有限，需要在线编辑，没有源代码，不能部署到自己的网站。如果选择Unity、Unreal这样的游戏引擎，学习成本又太高。

这是一款能够满足上述需求的软件。

## 特色

### 图形化编程
  - 基于谷歌开源可视化编程项目[Blockly](https://developers.google.cn/blockly)实现的拼图编辑器，全中文界面，让没有编程经验的用户实现零代码编程
### 本地化开发
  - 无需注册、登陆，资产和代码保存在本地，可离线使用
  - 开箱即用，工具集成，无需搭建环境，快速开发
### 内置UI编辑器
  - 底层基于微软开源游戏引擎[BabylonJS](https://babylonjs.com)，集成其UI编辑器，无需额外学习HTML/CSS零代码创建用户界面
### 主流三维软件支持
  - 可直接导入.babylon, .gltf/.glb, .stl, .obj格式的3D资产，支持主流三维软件，包括Blender, 3dsMax, Maya...
### 面向对象
  - 专为具备三维软件使用经验的3D设计师开发，也适合游戏开发者、编程爱好者、产品经理、教育工作者、学生...
### 适用项目
  - 适合开发产品展示、线上展厅、网页游戏、电子课件、数据可视化、产品原型等等

## 常见问题

### 遇到安全提示

- macOS打开`设置 - 隐私与安全性 - 安全性`，点击仍要打开
- windows点击`始终信任`

### 闪退

执行后没有自动打开浏览器，命令窗口闪退，出现这种问题可能是以下原因：
- windos：不支持win7
- macOS：不支持intel芯片的mac电脑，可选择从源码运行
- 正在运行，查看任务管理器确认
- 确保将`chrome` `edge` `firefox`等现代浏览器设置为默认浏览器
- `3001`端口被占用

### 是否支持c4d等三维软件

可以导入`.babylon` `.gltf/.glb` `.stl` `.obj`格式的3D资产，只要能导出上述格式的三维软件都支持。

### 发布后的应用能在本地运行吗？

最终发布是纯静态页面，一般需要部署到服务器才能运行。要在本地运行可以通过[electron](https://www.electronjs.org/)发布成桌面应用。

### Windows服务器上应用无法正常运行？

如果控制台提示.gltf .bin .glb .dds 等文件无法找到，可能是服务器缺少MIME类型，可按[此方法](https://jingyan.baidu.com/article/3ea51489b2ceea52e61bba24.html)添加以下文件扩展名MIME类型：

|扩展名 |	MIME类型|
|:-----|:-------|
|.gltf | model/gltf+json|
|.bin  | application/octet-stream|
|.glb  | model/gltf-binary|
|.dds  | image/vnd.ms-dds |

### 如何与`react` `vue`等前端框架集成

软件最终发布的是静态页面，可以通过`iframe`的方式在任何前端框架中嵌入。