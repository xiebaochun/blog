===
{
    "title":"webpack介绍及使用",
    "author":"xiebaochun",
    "categories":["前端"],
    "tags":["webpack","打包工具"]
}
===
# webpack介绍及使用

### webpack到底是啥？

官方定义：**webpack** is a **module bundler** (webpack是一个模块打包工具)。

_官方给出如下图所示的说明_

![](https://webpack.github.io/assets/what-is-webpack.png)

给人第一的印象是：智能加载相互依赖的模块并打包成对应的静态资源。  

似乎还没说清楚。

**前端模块加载的那些事儿**

随着前端项目越来越复杂（尤其是大型SPA），以及命名空间混乱，一系列模块加载器随之而生。

Javascript模块标准有：AMD 和 CommonJS _(有同学可能会跳出来说，不对，还有一个CMD)_

最有名的加载器有：RequireJS、SeaJS _(CMD规范，好吧，[射雕](https://github.com/lifesinger)YY出来滴，其实还是属于CommonJS标准)_ 、Bowserify  

**为什么还要再搞一个？**

webpack是这样抱怨的：  

现有的模块加载器，不能很好适配大型项目（大型单页面应用程序）开发。开发这样一款加载器最大原因，就是为了代码分离以及静态资源模块化无缝接合。尽管尝试去拓展现有的模块加载器，但最后发现不可能完成所有功能目标。

webpack的伟大理想是:

+ 分离现有依赖树，按需加载
+ 高效保证第一次加载
+ 静态资源模块化
+ 第三方库模块化加载
+ 实现加载器几乎所有环节可配置性
+ 适配大项目开发

### webpack有哪些吊炸天特性？

**代码分离**

Webpack有两种依赖声明方式：同步与异步。异步方式，将依赖分割成多个节点，然后每个节点形成一个新的文件块。经过优化后的文件块树，会以一个个文件形式分发出去（仅仅打包成一个大文件形式是很低效的）。

**加载器插件**

原生的Webpack只能处理JS文件，使用加载器插件，可以将其他资源专为JS资源。通过这种方式来加载，每一种资源都可以被Webpack看作是一个模块来加载。

**智能模块解析**

Webpack内置一个智能加载模块，可以用于处理几乎所有的第三方库。它甚至可以解析依赖声明的表达式，比如 require("./templates" + name + ".jade")。Webpack会处理最常见的JS模块标准：CommonJS 和 AMD。

**插件系统**

Webpack的最大特点，就是配套了非常丰富的插件系统。大部分内置特性功能都是基于这套插件系统。它可以让你根据需要自定义Webpack，将一般插件作为开源项目发布出去。
 
## webpack的安装

**通过NPM包管理器：**
```js
npm install -g webpack
```
项目中初始化Webpack

最优的方式就是，在项目中声明Webpack依赖。通过声明依赖，可以选择一个本地的Webpack版本，而不需要使用全局声明的版本。

添加一个npm 配置文件package.json：

npm init
然后需要回答一系列问题。如果希望把自己项目发布到npm上面，这些问题的回答非常重要。（如果不需要的话，一直回车就好啦）

安装webpack、添加依赖到package.json
```js
npm install webpack --save-dev
```
其中--save-dev就是声明在开发阶段需要用到webpack，并且自动把webpack依赖写到package.json配置文件上面，生产环境就不需要安装（上生产环境时候，webpack已经把项目打包好啦，不需要它老人家出马了）

## 总结

似乎还没弄清楚？确实，webpack在实践中的复杂度还是比较高的，但是多理论实践双剑合璧的话，相信您很快就会掌握其博大精深的奥秘。