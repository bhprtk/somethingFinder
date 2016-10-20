import {createStore, applyMiddleware} from 'redux';
import R from 'ramda';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';
import createLogger from 'redux-logger';
import config from '../config/debugSettings';

const sagaMiddleware = createSagaMiddleware();

const USE_LOGGING = config.reduxLogging;
const SAGA_LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED', 'persist/REHYDRATE'];

const logger = createLogger({
  predicate: (getState, { type }) => USE_LOGGING && R.not(R.contains(type, SAGA_LOGGING_BLACKLIST)),
});

export default function configureStore(initialState) {
	const store = createStore (
		rootReducer,
		initialState,
		applyMiddleware(
			thunk,
			reduxImmutableStateInvariant(),
			sagaMiddleware,
			logger
		)
	);
	store.runSaga = sagaMiddleware.run(sagas);
  return store;
}
