import { take, call, put } from 'redux-saga/effects';
import types from '../actions/actionTypes';
import * as storeActions from '../actions/storeActions';

export default () => {

	function* watcher() {
		while(true) {
			const input = yield take(types.STORE_PLACE);
			console.log ('input:', input)
		}
	}

	return {
		watcher
	};
}
