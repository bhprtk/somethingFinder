import { fork } from 'redux-saga/effects';
import api from '../services/API';
import yelp from './yelpSaga';
import mapSaga from './mapSaga';

export default function* root() {
	yield fork(yelp(api).watcher);
	yield fork(mapSaga(api).watcher);
}
