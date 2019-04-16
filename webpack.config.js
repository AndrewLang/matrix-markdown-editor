
    // Work around for https://github.com/angular/angular-cli/issues/7200

    const path = require('path');
    const webpack = require('webpack');

    module.exports = {
      entry: {
        editor: './src/index.ts',
      },    
      resolve: { extensions: ['.ts', '.js'] },
      output: {
        libraryTarget: 'umd',
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
      },
      devtool: "source-map",
      mode:"production",
      module: {
        rules: [
          { test: /\.ts$/, loader: 'ts-loader' }
        ]
      },
      optimization: {
        minimize: false
      }
    }
