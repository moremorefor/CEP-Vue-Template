const path = require('path')

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.join(__dirname, '/public/js'),
    filename: 'bundle.js'
  },
  target: 'node-webkit', // must target to node-webkit
  resolve: {
    modules: ['./src/js', 'node_modules'],
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['vue', 'env']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // `vue-loader` option
        }
      }
    ]
  },
  devtool: 'source-map'
}
