import { createReducer } from 'reduxsauce';
import types from '../actions/actionTypes';

export const INITIAL_STATE = {currentLocationMarker: null};

export const storeCurrentLocationMarker = (state = INITIAL_STATE, action) => {
	const { currentLocationMarker } = action;
	return { currentLocationMarker };
	// return { ...state, currentLocationMarker };
}

const ACTION_HANDLERS = {
	[types.STORE_LOCATION_MARKER]: storeCurrentLocationMarker
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
