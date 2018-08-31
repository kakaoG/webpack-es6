var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  //入口文件
  entry:'./src/app.js',
  //出口文件
  output:{
    filename:'bundle.js',                   //出口文件名
    path: path.resolve(__dirname,'dist')    //出口文件路径
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:[
          {
            loader:'babel-loader'
          }
        ],
        exclude: [
          //排除的不转换node_modules下面的.js文件
          path.resolve(__dirname, 'node_modules')
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html', //通过模板生成的文件名
      template: 'index.html',//模板路径
      inject: 'body' //是否自动在模板文件添加 自动生成的js文件链接
    })
  ]
}