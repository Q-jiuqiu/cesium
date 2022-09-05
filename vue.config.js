const webpack = require('webpack');

module.exports = {
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'public'),
    // },
    // compress: true,
    // port: 9000,
    allowedHosts: [
      "all"
    ]
  },

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify('./')
      })
      ],
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: []
    }
  }
};
