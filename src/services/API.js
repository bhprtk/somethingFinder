import axios from 'axios';

const pratik = () => {
	axios.get('/api/pratik')
		.then(res => console.log ('res:', res))
		.catch(err => console.log ('err:', err));
}
// const pratik = () => axios.get('/api/pratik');

export default {
	pratik
};
