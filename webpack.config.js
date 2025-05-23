const path = require('path');

module.exports = {
  mode: 'development', // ��� 'production' ��� ��������� ������
  entry: './src/index.js', // ����� �����
  output: {
    path: path.resolve(__dirname, 'dist'), // ���� ���������� ��������� ����
    filename: 'bundle.js', // ��� ���������� �����
  },
  devtool: 'inline-source-map', // ��� �������
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
