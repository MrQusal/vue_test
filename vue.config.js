// 修改 默认配置，去 vue cli 官网查
module.exports = {
  // pages 属性一般指定读取文档的位置
  pages: {
    index: {
      //  入口文件，此处可修改
      entry: 'src/main.js',
    },
  },
  // 关闭语法检查
  lintOnSave: false,
  /*
    方式一
    开启代理服务器（5000端口即后台端口，是代理服务器要把请求转发到 5000端口）
    eg：前台在 8080 端口，后台在 5000 端口。
        如果 8080 直接发 ajax 请求 到 5000 端口，存在跨域问题
          1. cros 后端处理
          2. 设置代理服务器后，相当于 8080 ajax请求 代理服务器（也在8080，所以不存在跨域问题） http请求 5000 端口

    缺点：
      1. 若请求路径为 stu，然而 public 中有名为 stu 的文件。那么就不会走代理，直接返回 public 中的 stu
      2. 无法配置多个代理服务器
  */
  /* devServer: {
    proxy: 'http://localhost:5000'
  } */

  /*
    方式二
      '/api' 请求前缀，放在端口后，路径中有 /api/ 就代表是走代理，/api/ 可自定义
      pathRewrite 路径重写，很重要。意思是路径中以 /api 开头的路径，将 api 替换为 ''
        eg：http://localhost/api/student --> http://localhost/student
      ws  用于支持 websocket。默认为 true
      changeOrigin  用于控制请求头的 host 值。默认为 true

    优点：灵活，可以控制是否走代理、还可以配置多个代理
  */
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: { "^/api": "" },
        ws: true,
        changeOrigin: true
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: { "^/demo": "" },
      }
    }
  }
}