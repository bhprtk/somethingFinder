import {combineReducers} from 'redux';
import name from './nameReducer';
import place from './placeReducer';

const rootReducer = combineReducers({
	name,
	place
});

export default rootReducer;
