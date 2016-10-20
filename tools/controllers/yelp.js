import Yelp from 'yelp';
require('dotenv').load();

const yelp = new Yelp({
  consumer_key: process.env.YELP_CONSUMER_KEY,
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET,
});

export function getGymList(location) {
	return (
		yelp.search({ term: 'gym', location })
			.then(data => data)
			.catch(err => err)
	);
}
