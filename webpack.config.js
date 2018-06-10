const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

const isProdBuild = process.env.NODE_ENV && process.env.NODE_ENV.indexOf('production') !== -1
const buildEnvString = isProdBuild ? 'production' : 'development'

/* eslint-disable no-console */

console.log(`Webpack build mode: ${buildEnvString}`)

const PATHS = {
  build: `${__dirname}/build`,
  dist: `${__dirname}/dist`,
  src: `${__dirname}/client`
}

module.exports = {
  context: __dirname,
  mode: buildEnvString,
  resolve: {
    alias: {
      'images': PATHS.src + '/assets/images',
      'components': PATHS.src + '/components',
      'config': PATHS.src + '/config',
      'data': PATHS.src + '/data',
      'layouts': PATHS.src + '/layouts',
      'middleware': PATHS.src + '/middleware',
      'providers': PATHS.src + '/providers',
      'scenes': PATHS.src + '/scenes',
      'services': PATHS.src + '/services',
      'store': PATHS.src + '/store',
      'themes': PATHS.src + '/themes'
    },
    symlinks: false
  },
  entry: {
    app: [
      'babel-polyfill',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      PATHS.src + '/index.js'
    ]
  },
  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: '/'
  },
  devtool: '#source-map',
  module: {
    rules: [
      (isProdBuild ? {
        test: /\.js$/,
        use: ['babel-loader']
      } : {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: ['react-hot-loader/babel']
          }
        }]
      }), {
        test: /\.(eot|ttf|otf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name]-[hash].[ext]'
          }
        }
      }, {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: {
          loader: 'file-loader?name=[name].[ext]'
        }
      }, {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([PATHS.dist, PATHS.build], {allowExternal: true}),
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      template: PATHS.src + '/index.html',
      filename: 'index.html'
    }),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoEmitOnErrorsPlugin(),
    new Webpack.DefinePlugin({
      'process.env': {'NODE_ENV': JSON.stringify(buildEnvString)}
    })
  ]
}
