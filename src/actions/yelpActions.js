import types from './actionTypes';

export function findGyms(place) {
	return {
		type: types.FIND_GYMS_REQUEST,
		place
	};
}
