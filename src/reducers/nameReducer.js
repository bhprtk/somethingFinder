import { createReducer } from 'reduxsauce';
import types from '../actions/actionTypes';

export const INITIAL_STATE = [{name: null}];

export const receive = (state = INITIAL_STATE, action) => {
	const {name} = action;
	return {name};
}

const ACTION_HANDLERS = {
  [types.NAME_RECEIVED]: receive
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
