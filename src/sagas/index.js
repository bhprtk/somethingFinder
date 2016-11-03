import { fork } from 'redux-saga/effects';
import api from '../services/API';
import yelp from './yelpSaga';
import map from './mapSaga';

export default function* root() {
	yield fork(yelp(api).watcher);
	yield fork(map(api).watcher);
}
