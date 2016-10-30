import { createReducer } from 'reduxsauce';
import types from '../actions/actionTypes';

export const INITIAL_STATE = { gymLocations: null };

export const receive = (state = INITIAL_STATE, action) => {
	const  { gymResults } = action;
	const newResults = gymResults.businesses.map(gym => {
		return {
			lat: gym.location.coordinate.latitude,
			lng: gym.location.coordinate.longitude
		};
	})
	return { ...state, gymLocations: newResults }
}

const ACTION_HANDLERS = {
	[types.GYM_RESULTS_SUCCESS]: receive
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
