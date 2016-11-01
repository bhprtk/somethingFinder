import {combineReducers} from 'redux';
import place from './placeReducer';
import gymResults from './gymResultsReducer';
import currentLocationMarker from './currentLocationMarkerReducer';
import gymLocations from './gymLocationsReducer';

const rootReducer = combineReducers({
	place,
	gymResults,
	currentLocationMarker,
	gymLocations
});

export default rootReducer;
