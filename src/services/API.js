import axios from 'axios';

const findGyms = (location) => axios.post('/api/yelp', {location});

export default {
	findGyms
};
