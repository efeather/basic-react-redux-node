const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const distPath = path.join(__dirname, 'public')

module.exports = {
    entry: {
        main: './src/client/index.tsx',
    },
    output: {
        filename: '[name]bundle.js',
        path: distPath,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'json'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: 'polymer-webpack-loader',
                exclude: [path.resolve(__dirname, 'index.html')],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    node: {
        child_process: 'empty',
        fs: 'empty',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'basic react redux node',
            hash: false,
            template: './index.html',
        }),
    ],
}
