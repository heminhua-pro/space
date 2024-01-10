const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.ts', //整个文件的入口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), //打包到根目录的dist文件夹下
    publicPath: 'dist',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/')
    },
    devMiddleware: {
      index: true,
      mimeTypes: { phtml: 'text/html' },
      publicPath: '/dist',
      serverSideRender: true,
      writeToDisk: false,
    },
  },
  devtool: 'inline-source-map',//用于调试的
  module: {
    rules: [
      {
        //ts结尾的文件，都用ts-loader依赖解析，除了node_moudules
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'], //所以import时不用.js/.ts
  }
}