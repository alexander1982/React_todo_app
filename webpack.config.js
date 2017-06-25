var webpack = require('webpack');
var path = require('path');

//noinspection JSUnresolvedFunction
module.exports = {
	entry    : [
		'script-loader!jquery/dist/jquery.min.js',
		'script-loader!foundation-sites/dist/js/foundation.min.js',
		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins  : [
		new webpack.ProvidePlugin({
			'$'     : 'jquery',
			'jQuery': 'jquery'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				sassLoader: {
					includePaths: [
						path.resolve(__dirname, './node_modules/foundation-sites/scss')
					]
				}
			}
		})
	],
	output   : {
		path    : __dirname,
		filename: './public/bundle.js'
	},
	resolve  : {
		modules   : [__dirname, 'node_modules', './app/components', './app/api'],
		alias     : {
			ApplicationStyles: 'app/styles/app.scss',
			Actions          : 'app/actions/actions.jsx',
			Reducers         : 'app/reducers/reducers.jsx',
			ConfigureStore   : 'app/store/configureStore.jsx'
		},
		extensions: ['.js', '.jsx', '.scss']
	},
	module   : {
		loaders: [
			{
				loader : 'babel-loader',
				query  : { presets: ['react', 'es2015', 'stage-3'] },
				test   : /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			},
			{
				loader: 'url-loader!file-loader!img-loader?limit=25000',
				test  : /\.(png|jpg)$/
			}
		]
	},
	devtool  : 'cheap-module-eval-source-map'
};