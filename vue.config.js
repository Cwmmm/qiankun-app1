const { name } = require('./package');
module.exports = {
  devServer: {
    port: '3000',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  chainWebpack: (config) => {
    // 生产环境使用cdn
    if (process.env.NODE_ENV === "production") {
      config.externals({
        vue: "Vue",
        "vur-router": "VueRouter",
        vuex: 'Vuex'
      });
    }
  },
};