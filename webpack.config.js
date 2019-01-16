const   path        = require('path'),
        webpack     = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './scripts/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './scripts/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: [ /\.vert$/, /\.frag$/ ],
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
