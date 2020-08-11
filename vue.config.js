/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-09 11:30:24
 * @LastEditTime: 2019-08-19 11:03:44
 * @LastEditors: Please set LastEditors
 */
const path = require('path')
const pkg = require('./package.json')
const port = 9527
const devUrl = ''

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  assetsDir: 'asset',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
    // proxy: {
    //   '/api': {
    //     target: devUrl,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': devUrl
    //     }
    //   }
    // }
  },
  configureWebpack: {
    name: pkg.name,
    resolve: {
      alias: {
        // '@': resolve('src')
      }
    }
  }
}
