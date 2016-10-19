import { take, call, put } from 'redux-saga/effects';
import types from '../actions/actionTypes';
import * as nameActions from '../actions/nameActions';

export default (api) => {

  function* worker() {
    const name = yield call(api.pratik);
    if (name.status === 200) {
      yield put(nameActions.receiveName(name.data));
    }
		// else {
    //   yield put(nameActions.receiveDefinitionFailure(definitions));
    // }
  }

  function* watcher() {
    while(true) {
      const input = yield take(types.NAME_REQUEST);
			// console.log ('input:', input)
			yield call(worker);
    }
  }

  return {
    worker,
    watcher
  };
};
