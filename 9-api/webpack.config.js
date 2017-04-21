let path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './assets/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  }, resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader'
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ]
};


