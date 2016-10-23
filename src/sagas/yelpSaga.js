import { take, call, put } from 'redux-saga/effects';
import types from '../actions/actionTypes';
import * as yelpActions from '../actions/yelpActions';

export default (api) => {

	function* worker(place) {
		const gymResults = yield call(api.findGyms, place);
		console.log ('gymResults:', gymResults)
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.FIND_GYMS_REQUEST);
			yield call(worker, input.place);
		}
	}

	return {
		watcher
	}
}
