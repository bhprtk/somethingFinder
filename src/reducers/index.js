import {combineReducers} from 'redux';
import name from './nameReducer';
import place from './placeReducer';
import gymResults from './gymResultsReducer';
import currentLocationMarker from './currentLocationMarkerReducer';
import gymLocations from './gymLocationsReducer';

const rootReducer = combineReducers({
	name,
	place,
	gymResults,
	currentLocationMarker,
	gymLocations
});

export default rootReducer;
