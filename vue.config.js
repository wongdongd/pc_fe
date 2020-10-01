module.exports = {
  // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // 是否使用包含运行时编译器的Vue核心的构建。
  runtimeCompiler: false,
  // 默认情况下babel-loader忽略其中的所有文件node_modules。
  transpileDependencies: [],
  // 生产环境sourceMap
  productionSourceMap: true,
  // webpack配置
  configureWebpack: () => { },
  chainWebpack: () => { },
  assetsDir: 'assets', //静态资源目录（js, css, img）
  // css相关配置
  // webpack-dev-server 相关配置
  devServer: {
    open: true, //是否自动弹出浏览器页面
    host: "127.0.0.1",
    port: '8090',
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_URL, //API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // PWA 插件相关配置
  pwa: {},
  // 第三方插件配置
}