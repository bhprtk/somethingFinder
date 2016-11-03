import types from './actionTypes';

export function getDistance(data) {
	return {
		type: types.GET_DISTANCE,
		data
	};
}

export function receiveDistanceResults(distance) {
	return {
		type: types.DISTANCE_RESULTS_SUCCESS,
		distance
	};
}
