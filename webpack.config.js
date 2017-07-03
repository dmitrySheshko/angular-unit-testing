var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var htmlWebpackPluginConf = {
    template: __dirname + '/client/index.html',
    inject: 'body'
};
module.exports = {
    context: __dirname + '/client',
    entry: {
        bundle: './app.js'
    },
    output: {
        path: __dirname + '/public/',
        filename: 'javascript/[name].js'
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin(htmlWebpackPluginConf)
    ]
};
