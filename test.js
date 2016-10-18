const Yelp = require('yelp');

const yelp = new Yelp({
	consumer_key: '_h6DJR3taiqw59QS-07BeQ',
	consumer_secret: 'lm0nhix7CdEsoYHYV5-MMFUpD_s',
	token: 'eSkf-Hh_7NumKeR5JhHjlt1PExcH8LTh',
	token_secret: 'GHRZvxXhe56WabD3NbXP0QxiIBo',
});
yelp.search({ term: 'gym', location: 'San Jose, CA, United States' })
	.then(function (data) {
		console.log(data);
	})
	.catch(function (err) {
		console.error(err);
	});
