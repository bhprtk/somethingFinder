import {combineReducers} from 'redux';
import name from './nameReducer';
import place from './placeReducer';
import gymResults from './gymResultsReducer';
import currentLocationMarker from './currentLocationMarkerReducer';

const rootReducer = combineReducers({
	name,
	place,
	gymResults,
	currentLocationMarker
});

export default rootReducer;
