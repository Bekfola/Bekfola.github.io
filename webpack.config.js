const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'main.js'), //'./src/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Webpack test',
      template: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
       test: /\.js$/,
       include: path.resolve(__dirname, 'src'),
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader',
         options: {
           presets: ['@babel/preset-env', '@babel/preset-react']
         }
       }
     },
     {
        test: /\.(png|jpg|gif)$/,
        use: [
            {
                loader: 'file-loader',
            }
        ]
    }
    ]
  }
};
