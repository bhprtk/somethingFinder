import { createReducer } from 'reduxsauce';
import types from '../actions/actionTypes';

export const INITIAL_STATE = {store: null};

export const storePlace = (state = INITIAL_STATE, action) => {
	console.log ('action:', action);
}

const ACTION_HANDLERS = {
	[types.STORE_PLACE]: storePlace
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
