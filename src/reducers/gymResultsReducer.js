import { createReducer } from 'reduxsauce';
import types from '../actions/actionTypes';

export const INITIAL_STATE = {gymResults: null, error: null};

export const receive = (state = INITIAL_STATE, action) => {
	const { gymResults } = action;
	return { ...state, gymResults };
}

export const failure = (state = INITIAL_STATE, action) => {
	return {error: true};
}

const ACTION_HANDLERS = {
	[types.GYM_RESULTS_SUCCESS]: receive,
	[types.GYM_RESULTS_FAILURE]: failure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
