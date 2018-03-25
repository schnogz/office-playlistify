const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const isProdBuild = process.env.NODE_ENV === 'production';
const buildEnvString = isProdBuild ? 'production' : 'development';
const PATHS = {
  build: `${__dirname}/../build`,
  dist: `${__dirname}/../dist`,
  src: `${__dirname}/../client`
};

module.exports = {
  context: isProdBuild ? (PATHS.dist) : (PATHS.build),
  mode: buildEnvString,
  resolve: {
    alias: {
      "images": PATHS.src + '/assets/images',
      "components": PATHS.src + '/components',
      "config": PATHS.src + '/config',
      "data": PATHS.src + '/data',
      "layouts": PATHS.src + '/layouts',
      "middleware": PATHS.src + '/middleware',
      "providers": PATHS.src + '/providers',
      "scenes": PATHS.src + '/scenes',
      "services": PATHS.src + '/services',
      "store": PATHS.src + '/store',
      "themes": PATHS.src + '/themes'
    },
    symlinks: false
  },
  entry: {
    app: [
      'babel-polyfill',
      ...(isProdBuild ? [] : [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        'webpack/hot/only-dev-server'
      ]),
      PATHS.src + '/index.js'
    ]
  },
  output: {
    path: isProdBuild ? (PATHS.dist) : (PATHS.build),
    chunkFilename: '[name].[chunkhash:10].js',
    publicPath: '/'
  },
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
        test: /\.(pdf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'resources/[name]-[hash].[ext]'
          }
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
    new Webpack.DefinePlugin({
      'process.env': {'NODE_ENV': JSON.stringify(buildEnvString)}
    }),
    ...(!isProdBuild ? [
      new Webpack.HotModuleReplacementPlugin(),
      new Webpack.NoEmitOnErrorsPlugin()
    ] : [])
  ],
  optimization: {
    namedModules: true,
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          warnings: false,
          compress: {
            warnings: false,
            keep_fnames: true
          },
          mangle: {
            keep_fnames: true
          },
          nameCache: null,
          toplevel: false,
          ie8: false
        }
      })
    ],
    concatenateModules: isProdBuild,
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        default: {
          chunks: 'initial',
          name:
            'app',
          priority:
            -20,
          reuseExistingChunk:
            true
        },
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          priority: -10,
        }
      }
    }
  }
};