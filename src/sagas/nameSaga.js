import { take, call, put } from 'redux-saga/effects';
import types from '../actions/actionTypes';
import nameActions from '../actions/nameActions';

export default (api) => {

  // function* worker(word) {
  //   const name = yield call(api.pratik, word);
  //   if (name.status === 200) {
  //     yield put(Actions.receivename(name.data));
  //   } else {
  //     yield put(Actions.receiveDefinitionFailure(definitions));
  //   }
  // }

  function* watcher() {
    while(true) {
      const input = yield take(types.NAME_REQUEST);
      console.log ('input:', input)
    }
  }

  return {
    // worker,
    watcher
  };
};
