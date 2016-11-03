import { createReducer } from 'reduxsauce';
import types from '../actions/actionTypes';

export const INITIAL_STATE = { distance: null };

export const receive = (state = INITIAL_STATE, action) => {
	const { distance } = action;
	const returnDistance = distance.rows[0].elements[0];
	return { ...state, distance: returnDistance };
}

const ACTION_HANDLERS = {
	[types.DISTANCE_RESULTS_SUCCESS]: receive
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
