import {combineReducers} from 'redux';
import name from './nameReducer';
import place from './placeReducer';
import gymResults from './gymResultsReducer';

const rootReducer = combineReducers({
	name,
	place,
	gymResults
});

export default rootReducer;
