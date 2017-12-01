var config = {
    entry: './main.js',
    output: {
        path:  '/' ,
        filename: 'index_gen.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        inline: true,
        port: 8081,
     },
    
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
           
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
             
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css?$/,
                use : [
                    {
                        loader: 'style-loader'
                    }, 
                   
                     {
                        loader: 'css-loader',
                       options: {
                            modules: true,
                            importLoaders: 1,
                            sourceMaps: true,
                            alowMultiple: true,
                           camelCase: true,
                           localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }
                ]
               
                
            }
        ]
    }
}

module.exports = config;