import colors from 'colors';

/* eslint-disable no-console */
if(process.env.NODE_ENV === "production") {
	console.log("Starting app in production mode...".magenta);
} else {
	console.log('Starting app in dev mode...'.green);
}
