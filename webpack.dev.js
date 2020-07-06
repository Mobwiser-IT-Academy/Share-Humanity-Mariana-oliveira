const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');


module.exports = {
	entry: {
		main: "./src/scripts/index.js",
		index: "./src/page-index/index.js", 
		issue: "./src/page-issue/issue.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
        		options: {
          			presets: ['@babel/preset-env']
        		}
			}, 
			{
				test: /\.scss$/,
				use: [
					"style-loader",  //3. Inject styles into DOM
					"css-loader", // 2. Turns css into commonjs
					"sass-loader"   // 1. Turns sass into css
				]
			},
			{
				test:/\.(svg|png|jpg|gif)$/i,
				use:{ 
					loader: "file-loader",
					options: {
						name: "[name].[hash].[ext]",
						outputPath: "./assets/images"
					}
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
				  	}
				] 
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/page-index/index.html",
			favicon: './src/assets/images/icon.svg',
			inject: true,
      		chunks: ['index'],
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			template: "./src/page-issue/issue.html",
			favicon: './src/assets/images/icon.svg',
			inject: true,
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
		})
	],
};