const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const buildPath =  path.resolve(__dirname, 'dist');


module.exports =  merge(common, {
	mode: "production",
	output: {
		filename: "[name].[contentHash].bundle.js",
		path: buildPath,
	},
	module: {
		rules: [			

			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,  //3. Extract css into files
					"css-loader", // 2. Turns css into commonjs
					"sass-loader"   // 1. Turns sass into css
				]
			}
		]
	},	
	plugins: [ 
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/page-index/index.html",
			favicon: './src/assets/images/icon.svg',
			inject: 'body',
      		chunks: ['index'],
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			template: "./src/page-issue/issue.html",
			favicon: './src/assets/images/icon.svg',
			inject: 'body',
     		 chunks: ['issue'],
			filename: 'issue.html'
		}),
		new HtmlWebpackPartialsPlugin({
			path: path.join(__dirname, './src/partials/footer.html'),
			location: 'footer',
			template_filename: ['index.html', 'issue.html']
		}),
		new HtmlWebpackPartialsPlugin ({
			path: path.join(__dirname, './src/partials/header.html'),
			location: 'header',
			template_filename: ['index.html', 'issue.html']
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[contentHash].css",
			chunkFilename: "[id].[contenthash].css"
		}), 
		
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			}),
			new OptimizeCssAssetsPlugin({})
		]
	}
});