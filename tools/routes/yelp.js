import express from 'express';
const router = express.Router();
import request from 'request';
import { getGymList, getBusiness } from '../controllers/yelp';

router.route('/')
	.post((req, res) => {
		const {location} = req.body;
		getGymList(location)
			.then(list => res.send(list))
			.catch(err => res.status(400).send(err));
	});

router.route('/business')
	.get((req, res) => {
		getBusiness()
			.then(data => res.send(data))
			.catch(err => res.status(400).send(err));
	});

module.exports = router;
