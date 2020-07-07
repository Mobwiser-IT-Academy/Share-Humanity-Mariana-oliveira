const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');


module.exports =  merge(common, {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader",  //3. Inject styles into DOM
					"css-loader", // 2. Turns css into commonjs
					"sass-loader"   // 1. Turns sass into css
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
});