const webpack = require('webpack');
const path = require('path');

const uglify = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
    },
    output: {
        comments: false,
    },
});

module.exports = {
    entry: {
        app: ['./app.js']
    },
    output: {
        path: path.resolve(__dirname, 'app/dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    plugins: [ uglify ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: { loader: 'babel-loader', options: { presets: ['env'] } }
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            { test: /\.svg$/, loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
            { test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
            { test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
            { test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
            { test: /\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' }
        ]
    }
}