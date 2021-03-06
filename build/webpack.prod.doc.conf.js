/**
 * by chuchur /chuchur@qq.com
 * 打包vue 组件
 */
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')//for webpack 3
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //for webpack 4
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //for webpack 4
const path = require('path');
const pkg = require('../package.json');
const webpackBaseConfig = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin') //for vue-loader 15

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  entry: {
    index: ['./dos/main.js'],
    vendors: ['vue', 'vue-router']
  },
  output: {
    path: path.resolve(__dirname, '../dos-html'),
    filename: 'js/[name].[hash:5].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[chunkhash:5].js',
    libraryTarget: 'umd',
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({ fallback: "style-loader", use: [{ loader: "css-loader" }], }),
      // },
      {
        test: /\.less$/,
        // use: ['vue-style-loader', 'css-loader', 'less-loader'],
        // use: ExtractTextPlugin.extract({ fallback: "style-loader", use: [{ loader: "css-loader" }, { loader: "less-loader" },], }),
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'], // : , 
      },
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            loaders: {
              css: 'vue-style-loader!css-loader',
              less: 'vue-style-loader!css-loader!less-loader'
            },
            // postLoaders: { html: 'babel-loader' }
          }
        },
        {
          loader: 'kui-loader',
          options: { prefix: false }
        }]
      },]
  },
  optimization: {
    splitChunks: {
      name(module) {
        return (
          module.resource && /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
        )
      }
    },
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            // drop_debugger: true,
            // drop_console: true
          },
          sourceMap: false
        }
      })
    ]
  },
  plugins: [
    new VueLoaderPlugin(), //for vue-loader 15
    new MiniCssExtractPlugin({ filename: "css/[name].[contenthash:5].css" }),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      // 生成html文件的名字，路径和生产环境下的不同，要与修改后的publickPath相结合，否则开启服务器后页面空白
      filename: 'index.html',
      // 源文件，路径相对于本文件所在的位置
      template: path.resolve(__dirname, '../dos/index.html'),
      // 需要引入entry里面的哪几个入口，如果entry里有公共模块，
      // chunks: ['index', 'vendors'],
      // 要把<script>标签插入到页面哪个标签里(body|true|head|false)
      favicon: path.join(__dirname, '../dos/assets/kui-vue.png'),
      inject: true,
      // 生成html文件的标题
      // title: 'KUI 使用文档',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      chunksSortMode: 'dependency'
      // hash如果为true，将添加hash到所有包含的脚本和css文件，对于解除cache很有用
      // minify用于压缩html文件，其中的removeComments:true用于移除html中的注释，collapseWhitespace:true用于删除空白符与换行符
    }),
    new webpack.BannerPlugin(pkg.name + ' v' + pkg.version + ' by chuchur (c) ' + new Date().getFullYear() + ' Licensed ' + pkg.license),
    // 允许错误不打断程序
    // new webpack.NoErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({ minimize: true })
  ],
})