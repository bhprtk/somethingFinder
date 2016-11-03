import types from './actionTypes';

export function getDistance(data) {
	return {
		type: types.GET_DISTANCE,
		data
	};
}
