const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin =  require('mini-css-extract-plugin')
const OptimazeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
console.log(isDev)

const optimization = () => {
    const config =  {
         splitChunks: {
             chunks: 'all'
         }
     }
     if(isProd) {
         config.minimizer = [
             new TerserWebpackPlugin(),
             new OptimazeCssAssetsWebpackPlugin()
         ]
     }
     return config
 }
module.exports = {
    mode: "development",
    entry: {
        main: './src/index.js',
        types: './src/tupes.ts'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'dist')
    },
    optimization: optimization(),
    devServer:{
        port: 4200,
        hot: true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify:{ 
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [ {
                from: path.resolve(__dirname, 'src/favicon.ico'),
                to: path.resolve(__dirname, 'dist')
        }]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test:/\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
              {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env','@babel/preset-typescript']
                  }
                }
              },
              {
                test: /\.php$/,
                use: [
                  'html-minify',
                  'php-loader'
                ]
              }
        ]
    }
}