// import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import types from '../actions/actionTypes';

export const INITIAL_STATE = [{name: null}];

export const receive = (state = INITIAL_STATE, action) => {
	console.log ('action:', action)
	return {name: action.name};
}

// const receive = (state, action) =>
//   state.merge({
//     name: action.name,
//   });

const ACTION_HANDLERS = {
  [types.NAME_RECEIVED]: receive
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
