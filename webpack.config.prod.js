import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
	'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
  debug: true, // display debug information
  devtool: 'source-map',
  noInfo: false, // webpack will display all the files it's bundling
  entry: './src/index', // entry point should be last, order is important
  target: 'web', // we are targeting the browser, we can also use node to run our app in node
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/', // webpack doesn't generate physical files. But it simulates generating physical files in the memory for the browser
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist' // tell webpack devServer where our code is
  },
  plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin(GLOBALS),
		new ExtractTextPlugin('styles.css'),
		new webpack.optimize.DedupePlugin(), // eliminates duplicate packages in the final bundle
		new webpack.optimize.UglifyJsPlugin()
  ],
  module: { // specify the types of files webpack needs to handle
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")},
      // all below are for bootstrap
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
