const path = require('path');

const GlobalWebpackConfig = {
    devServer: {
        historyApiFallback: true,
        contentBase: [
            path.join(__dirname, './../app/'),
            path.join(__dirname, './../../packages/@navikt/'),
        ],
        watchContentBase: true,
    },
    entry: {
        scripts: './playground/app/index.js',
        vendors: ['react', 'react-dom'],
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }, { loader: 'file-loader' }],
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, './../app'),
                    path.resolve(__dirname, './../../packages'),
                ],
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['module:react-docgen', 'transform-object-rest-spread'],
                },
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' },
                ],
            },
        ],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js',
    },
    resolve: {
        alias: {
            Modules: path.resolve(__dirname, './../../packages/@navikt'),
        },
    },
};

module.exports = GlobalWebpackConfig;
