module.exports = {
    context: __dirname,
    entry: "./app/index.jsx",
    output: {
        path: "./",
        filename: "react-bundle.js"
    },
    module: {
        loaders: [
            {
                test: [/\.jsx?$/, /\.js?$/],
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			}
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    devtool: 'source-map'
};
