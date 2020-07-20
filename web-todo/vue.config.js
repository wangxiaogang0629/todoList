const path = require('path')
function resolve (dir) { // 绝对路径
  return path.join(__dirname,dir)
}
   
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 生产
    } else {
      // 开发
    }

    config.resolve = {
        extensions: ['.js', '.vue', '.json',".css"],
        alias: { // 配置路径的别名
          'vue$': 'vue/dist/vue.min.js',
          '@': resolve('src'),
          'comps': resolve('src/components'),
        },

    }
  },
  /** 查看检验项目的 webpack 配置
   * vue inspect > output.js 输出文件
   * vue inspect --rules 查看所有配置规则的名称
   * vue inspect --rule -svg 查看指定规则的配置
   */
  chainWebpack: config => { // 链式配置
    console.log('resolve', resolve('src/assets'))

    /** svg 配置 
     * 1、先排除 vue-cli 对 本地项目目录中的 svg 的处理
     * 2、新增一个规则 load 对 fonts 目录中 svg 进行处理
     */
    config.module.rule('svg')
      .exclude.add(resolve('src/assets/font'))

    config.module.rule('icons')
      .test(/\.svg$/) // 匹配 注意此处接收一个正则
      .include
        .add(resolve('src/assets/font')) // 设置检查目录
        .end()
      .use('svg-sprite-loader') // 配置 load
        .loader('svg-sprite-loader')
        .options({symbolId: 'icon-[name]'}) // 输出 svg 名称为 icon- + 文件名
  },

  runtimeCompiler: true
}