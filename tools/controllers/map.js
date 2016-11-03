import request from 'request-promise';

export function getDistance(data) {
	const { origins, destinations } = data;
	const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origins}&destinations=${destinations}&key=AIzaSyCOF8KwZhH36F4I5neMGCn9PycbW4jku3Y`;
	return (
		request(url)
			.then(res => res)
			.catch(err => err)
	);
}
