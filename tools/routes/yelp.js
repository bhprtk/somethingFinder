import express from 'express';
const router = express.Router();
import request from 'request';
import {getGymList} from '../controllers/yelp';

router.route('/')
	.post((req, res) => {
		const {location} = req.body;
		console.log ('location:', location)
		getGymList(location)
			.then(list => res.send(list))
			.catch(err => console.log ('err:', err));
	})

module.exports = router;
