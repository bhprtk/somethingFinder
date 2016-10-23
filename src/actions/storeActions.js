import types from './actionTypes';

export function storePlace(place) {
	return {
		type: types.STORE_PLACE,
		place
	};
}
