import types from './actionTypes';

export function requestName() {
	return {
		type: types.NAME_REQUEST
	};
}
// const requestName = word => ({
// 	type: types.NAME_REQUEST
// });
//
// export default {
// 	requestName
// };
