import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import GymResults from './components/GymResults/GymResults';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="results" component={GymResults} />
	</Route>
);
