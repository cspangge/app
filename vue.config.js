module.exports = {
  //= >process.env.NODE_ENV：环境变量中存储的是开发环境还是生产环境
  // publicPath: process.env.NODE_ENV === 'production' ? 'http://www.xxx.cn/' : '/',
  publicPath: '/',
  //= >outputDir
  outputDir: 'deployment',
  //= >自定义目录名称，把生成的JS/CSS/图片等静态资源放置到这个目录中
  assetsDir: 'assets',
  //= >关闭生产环境下的资源映射（生产环境下不在创建xxx.js.map文件）
  productionSourceMap: false,
  //= >设置一些webpack配置项，用这些配置项和默认的配置项合并
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  configureWebpack: {
    plugins: []
  },
  //= >修改webpack-dev-server配置（尤其是跨域代理）
  devServer: {
    open: true, // 是否自动打开浏览器
    host: '0.0.0.0',
    port: 8080,
    https: false, // 是否启动HTTPS
    overlay: {
      warnings: true,
      errors: true
    },
    // enable HMR
    hot: true,
    hotOnly: true,
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'http://api.pangge.app',
        secure: true, // 如果是https接口，需要配置这个参数
        pathRewrite: {
          '^/api': '/dev/api' // 需要rewrite的,
        }
      }
    }
  },
  //= >多余1核cpu时：启动并行压缩
  parallel: require('os').cpus().length > 1
};

