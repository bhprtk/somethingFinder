import axios from 'axios';

const findGyms = (location) => axios.post('/api/yelp', {location});

const getDistance = (data) => axios.post('/api/map', {data});

export default {
	findGyms,
	getDistance
};
