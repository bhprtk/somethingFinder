import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

import bodyParser from 'body-parser';

/*eslint-disable no-console */

const PORT = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(express.static('dist'));

app.use('/api', require('./routes'));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, function(err) {
	if(err) {
		console.log(err);
	} else {
		open(`http://localhost:${PORT}`);
	}
});
