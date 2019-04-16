
// Work around for https://github.com/angular/angular-cli/issues/7200

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    editor: './src/index.ts',
    styles: './src/scss/styles.scss'
  },
  // entry: ["./src/index.ts", "./src/scss/styles.scss"],
  resolve: { extensions: ['.ts', '.js', '.scss'] },
  output: {
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  devtool: "source-map",
  mode: "production",
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          // 'postcss-loader',
          'sass-loader',
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({     
      filename: './[name].css',
      chunkFilename: './[id].css',
    })
  ],
  optimization: {
    minimize: false
  }
}
