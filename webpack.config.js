const path = require('path');
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');

module.exports = env => {
  return {
    entry: './src/main.js',
    mode: env.NODE_ENV,
    devtool: env.NODE_ENV === 'production' ? false : 'source-map',
    devServer: {
      hot: true
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.s?css$/,
          use: [
            env.NODE_ENV === 'production' ? 
            MiniCssExtract.loader :
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
            }
          ]
        },
        {
          test: /\.(jpe?g|png|gif|mp3)/,
          use: {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name]-[hash].jpg'
            }
          }
        }
      ]
    },

    resolve:{
      extensions: ['*', '.vue', '.js', '.json'],
      alias: {
        globalStyle: path.resolve(__dirname, 'src/assets/scss/main.scss'),
        Image: path.resolve(__dirname, 'src/assets/images'),
        Audio: path.resolve(__dirname, 'src/assets/audio'),
      }
    },

    output: {
      filename: 'index.js'
    },

    plugins:[
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './index.html',
      }),
      new MiniCssExtract({
        filename: '[name].css',
        chunkFilename: '[name].css',
      }),
    ]    
  }
}