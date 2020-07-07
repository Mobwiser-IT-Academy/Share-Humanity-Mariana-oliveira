
module.exports = {
	entry: {
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
				test:/\.(svg|png|jpg|gif)$/i,
				use:{ 
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
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
    }
}