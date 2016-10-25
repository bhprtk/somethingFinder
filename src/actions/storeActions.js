import types from './actionTypes';

export function storePlace(place) {
	return {
		type: types.STORE_PLACE,
		place
	};
}

export function storeCurrentLocationMarker(currentLocationMarker) {
	return {
		type: types.STORE_LOCATION_MARKER,
		currentLocationMarker
	};
}
