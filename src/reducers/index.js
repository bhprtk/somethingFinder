import {combineReducers} from 'redux';
import name from './nameReducer';
import store from './storeReducer';

const rootReducer = combineReducers({
	name,
	// store
});

export default rootReducer;
