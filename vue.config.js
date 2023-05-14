module.exports = {
  devServer: {
      proxy: {
          '/api': {
              target: 'http://baidu.com', //对应自己的接口
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                  '^/api': ''
              }
          }
      }
  }
}


paypay_py_skd_url ="http://baidu.com"