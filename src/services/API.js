import axios from 'axios';

const pratik = () => axios.get('/api/pratik');

const findGyms = (location) => axios.post('/api/yelp', {location});

export default {
	pratik,
	findGyms
};
