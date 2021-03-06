module.exports = {
    entry:'./src/app/index.js',
    output:{
        path:__dirname + '/src/public',
        filename: 'bundle.js'
    },
    /*module:{
        rules:[{
            use: 'babel-loader',
            test: /\.js$/,
            exclude:/node_modules/
        }]
        }*/
        module: {
            rules: [
              {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
              {test: /\.svg$/,
                use: [
                  {
                    loader: "babel-loader"
                  },
                  {
                    loader: "react-svg-loader",
                    options: {
                      jsx: true // true outputs JSX tags
                    }
                  }
                ]}
              
            ]
          }        

  
}