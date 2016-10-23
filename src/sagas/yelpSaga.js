import { take, call, put } from 'redux-saga/effects';
import types from '../actions/actionTypes';
import * as yelpActions from '../actions/yelpActions';

export default (api) => {

	function* worker() {

	}

	function* watcher() {
		while(true) {
			const input = yield take(types.FIND_GYMS_REQUEST);
			console.log('hello')
			console.log ('input:', input)
			// yield call(worker, place);
		}
	}

	return {
		watcher
	}
}
