let path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        './app/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app', 'build'),
        publicPath: "/"
    },

    devServer: {
        hot: true,
        // enable HMR on the server

        contentBase: path.resolve(__dirname, 'app', 'build'),
        // match the output path
    },

    watch: true,


    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader',],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?modules',],
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                use: 'file?name=[path][name].[ext]?[hash]'
            }
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ],
    devtool: "eval"
};