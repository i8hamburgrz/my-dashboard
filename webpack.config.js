const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

module.exports = {
  entry: {
    main: ['./src/index.js', './src/main.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },{
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new HtmlWebpackTagsPlugin(
      { 
        tags: [], 
        links: [
          {
            path: 'src/main.css',
            publicPath: true,
            attributes: {
              rel: 'text/css'
            }
          }
        ],
        append: true 
      }
    )
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: 'source-map'
};