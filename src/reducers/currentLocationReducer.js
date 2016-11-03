import { createReducer } from 'reduxsauce';
import types from '../actions/actionTypes';

export const INITIAL_STATE = { currentLocation: null };

export const storeCurrentLocation = (state = INITIAL_STATE, action) => {
	const { currentLocation } = action;
	return { ...state, currentLocation };
}

const ACTION_HANDLERS = {
	[types.STORE_CURRENT_LOCATION]: storeCurrentLocation
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
