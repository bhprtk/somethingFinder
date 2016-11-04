import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import colors from 'colors';
// require('dotenv').load();

/* eslint-disable no-console */

const PORT = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);
import bodyParser from 'body-parser';
import morgan from 'morgan';


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./routes'));
app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`.magenta);
});
