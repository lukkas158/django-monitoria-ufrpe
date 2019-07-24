const path = require('path');   

module.exports = {
    watch : true,
    entry : './index.js',
    output: {
        filename: 'app.js',
        path: path.resolve('../static/frontend')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
};