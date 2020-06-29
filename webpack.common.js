const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
	entry: [
		"./src/scripts/index.js", 
	],
	plugins: [
		new HtmlWebpackPlugin({
		    template: "./src/index.html"
		}),
		new  SpriteLoaderPlugin()
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ["html-loader"]
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
				test: /\.svg$/i,
            
				// from all svg images
				// include only sprite image
				include: /.*sprite\.svg/,
            
				use: [
					{
						loader: 'svg-sprite-loader',
						options: {
							publicPath: './assets/images',
						}
					},
				],
			},
		]
	}
};