const path = require('path');

module.exports = {
    // other webpack configuration
    module: {
      rules: [
        {
          test: /\.html$/,
          use: 'html-loader',
        },
      ],
    },
  };
  
