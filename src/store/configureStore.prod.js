import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
	const store = createStore (
		rootReducer,
		initialState,
		applyMiddleware(thunk, sagaMiddleware)
	);
	store.runSaga = sagaMiddleware.run(sagas);
  return store;
}
