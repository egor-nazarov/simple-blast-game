const   path        = require('path');

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
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
