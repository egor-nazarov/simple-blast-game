const   path        = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './scripts/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './scripts/bundle.js'
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
