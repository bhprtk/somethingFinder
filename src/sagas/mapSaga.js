import { take, call, put } from 'redux-saga/effects';
import types from '../actions/actionTypes';
import * as mapActions from '../actions/mapActions';

export default (api) => {

	function* worker(data) {
		const distance = yield call(api.getDistance, data);
		console.log ('distance:', distance)

	}

	function* watcher() {
		while(true) {
			const input = yield take(types.GET_DISTANCE);
			yield call(worker, input.data);
		}
	}

	return {
		watcher,
		worker
	}
};
