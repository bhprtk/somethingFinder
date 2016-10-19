import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import sagaMiddleware from 'redux-saga';
import sagas from '../sagas/';

export default function configureStore(initialState) {
	return createStore (
		rootReducer,
		initialState,
		applyMiddleware(
			thunk,
			reduxImmutableStateInvariant(),
			sagaMiddleware(...sagas)
		)
	);
}
