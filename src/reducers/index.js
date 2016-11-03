import {combineReducers} from 'redux';
import place from './placeReducer';
import gymResults from './gymResultsReducer';
import currentLocationMarker from './currentLocationMarkerReducer';
import gymLocations from './gymLocationsReducer';
import distance from './distanceReducer';
import currentLocation from './currentLocationReducer';

const rootReducer = combineReducers({
	place,
	gymResults,
	currentLocationMarker,
	gymLocations,
	distance,
	currentLocation
});

export default rootReducer;
