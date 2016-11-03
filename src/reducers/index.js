import {combineReducers} from 'redux';
import place from './placeReducer';
import gymResults from './gymResultsReducer';
import currentLocationMarker from './currentLocationMarkerReducer';
import gymLocations from './gymLocationsReducer';
import distance from './distanceReducer';

const rootReducer = combineReducers({
	place,
	gymResults,
	currentLocationMarker,
	gymLocations,
	distance
});

export default rootReducer;
