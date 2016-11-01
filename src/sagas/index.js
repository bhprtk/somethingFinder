import { fork } from 'redux-saga/effects';
import api from '../services/API';
import yelp from './yelpSaga';

export default function* root() {
	yield fork(yelp(api).watcher);
}
