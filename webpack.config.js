const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    status_updates: './src/status-updates.js',
    to_do_list: './src/to-do-list.js',
    add_item: './src/add-item.js',
    display_items: './src/display-items.js',
    edit_description: './src/edit-description.js',
    task: './src/task.js',
    clear_all_completed: './src/clear-all-completed.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};