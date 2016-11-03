import axios from 'axios';

const findGyms = (location) => axios.post('/api/yelp', {location});

// const getDistance = (origins, destinations) => axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origins}&destinations=${destinations}&key=AIzaSyCOF8KwZhH36F4I5neMGCn9PycbW4jku3Y`);

const getDistance = (data) => axios.post('/api/map', {data});

export default {
	findGyms,
	getDistance
};
