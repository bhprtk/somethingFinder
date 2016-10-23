import types from './actionTypes';

export function findGyms(place) {
	return {
		type: types.FIND_GYMS_REQUEST,
		place
	};
}

export function receiveGymResults(gymResults) {
	return {
		type: types.GYM_RESULTS_SUCCESS,
		gymResults
	};
}

export function receiveGymResultsFailure(error) {
	return {
		type: types.GYM_RESULTS_FAILURE,
		gymResults
	}
}
