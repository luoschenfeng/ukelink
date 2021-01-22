'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        return [
          ...args,
          {
            title: 'vue-oa',
          },
        ]
      })

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()

    //全局样式
    const oneOfsMap = config.module.rule('scss').oneOfs.store

    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({

          // Or array of paths
          resources: [ './src/styles/index.scss' ],
        })
        .end()
    })
  },
  devServer: {
    proxy: {
      '^/api/': {

        target: process.env.VUE_APP_BACKEND_URL,
        ws: true,
        changeOrigin: true,

        // rewrite path
        // eg: '^/api/': '/',
        pathRewrite: {},
      },
    },
  },
  configureWebpack: {
    devtool: 'source-map',
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-oa/'
    : '/',
}
