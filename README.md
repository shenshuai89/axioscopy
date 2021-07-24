简易版实现类似axios的get功能，通过改功能分析axios源码的实现，包含
* deepCopy
* merge【对config特殊处理】
* 拦截器interceptorManager
* 适配器adaptor，兼容web和node环境
## 创建server
使用koa和koa-router实现简单的接口请求，代码参考文件
/server/index.js
启动服务：nodemon index.js
## 创建client
创建index.html，然后是parcel进行项目管理，可以实现热更新。
在package中添加启动脚本
```
  "start": "parcel ./client/*.html"
```
### 创建nxios类
创建index.js和nxios文件，index只作为入口文件，并实现类的实例化

### 创建utils工具函数
实例deepCopy和merge方法。
- deepCopy实现对象引用后相互不产生影响
- merge对合并config的不同数据做单独处理，headers属性需要追加，而其他属性需要替换操作

### 创建拦截器
拦截器，对request方法和response做统一处理

### 创建适配器
适配器可以兼容web和node环境

#### 测试web环境
在web环境下，使用的是ajax文件，内部使用XMLHTTPRequest对象
#### 测试node环境
node环境下，使用的是http模块的接口

注：node环境下测试，使用server/server_request.js,但是文件让node运行时支持ECMA语法，必须使用
```
node --experimental-specifier-resolution=node server_request.js 
```
进行启动测试