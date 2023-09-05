const path = require('path');
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    another: './src/home.js',
    another: './src/menu.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Le Pichet',
        template: './src/index.html',
        filename: './dist/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'] 
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: `asset/resource`,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};