import types from './actionTypes';

export function requestName() {
	return {
		type: types.NAME_REQUEST
	};
}

export function receiveName(name) {
	return {
		type: types.NAME_RECEIVED,
		name
	};
}
// const requestName = word => ({
// 	type: types.NAME_REQUEST
// });
//
// export default {
// 	requestName
// };
