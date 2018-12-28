const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
        mode: 'development',
   // 配置入口文件
        entry: {
            'index': path.resolve(__dirname, '../src/index.js'),
            },
 // 配置打包输出
    output: {
        path: path.resolve(__dirname, '../dist'),  
        // publicPath: '/', 
        filename: '[name].js',
        // chunkFilename: './bundle.chunck.js'
    },
    module: {
      rules: [
        { test: /\.ts$/, use: 'ts-loader' },
        {
          test: /\.jsx?$/,
          include: path.resolve(__dirname, '../src'),
          exclude: path.resolve(__dirname, '../node_modules'),
          loader: 'babel-loader'
        }, {
          test: /\.(png|svg|jpg|gif)$/,
          use: [ 'file-loader' ]
        }, {
          test: /\.(css|less)$/,
          use: ['style-loader',
          {
            loader: 'css-loader',
          },
          'postcss-loader',
            {
              loader: 'less-loader',
                options: { javascriptEnabled: true }
            }]
        }
      ]
    },
     resolve: {
       extensions: ['*','.js', '.jsx','json'],
 
     },
   plugins: [
 
     new webpack.HotModuleReplacementPlugin(),
     new HtmlWebpackPlugin({template: './src/index.html'})
   ]
  }