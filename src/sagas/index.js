import { fork } from 'redux-saga/effects';
import api from '../services/API';
import name from './nameSaga';
import yelp from './yelpSaga';

export default function* root() {
	yield fork(name(api).watcher);
	yield fork(yelp(api).watcher);
};
