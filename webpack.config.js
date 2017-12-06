const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: '\index.html',
    inject: 'body'
})

var config = {
    context: path.resolve(__dirname, "src"),
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist') ,
        filename: 'index_gen.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        inline: true,
        port: 8081,
     },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve('./src/components'),
            pages: path.resolve('./src/pages'),
            css: path.resolve('./src/css'),
            node_modules : path.resolve('./node_modules')
        },
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
    },
    plugins: [HtmlWebpackPluginConfig],

}

module.exports = config;