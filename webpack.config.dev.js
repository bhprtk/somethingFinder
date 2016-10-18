import webpack from 'webpack';
import path from 'path';

export default {
  debug: true, // display debug information
  devtool: 'cheap-module-eval-source-map',
  noInfo: false, // webpack will display all the files it's bundling
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index' // entry point should be last, order is important
  ],
  target: 'web', // we are targeting the browser, we can also use node to run our app in node
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/', // webpack doesn't generate physical files. But it simulates generating physical files in the memory for the browser
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src' // tell webpack devServer where our code is
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // will let us replace modules without having to refresh our browser
    new webpack.NoErrorsPlugin() // helps us keep errors from breaking our hot reloading experience and instead will display nice error messages in the browser
  ],
  module: { // specify the types of files webpack needs to handle
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      // all below are for bootstrap
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
