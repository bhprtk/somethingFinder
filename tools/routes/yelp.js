import express from 'express';
const router = express.Router();
import request from 'request';
import {getGymList} from '../controllers/yelp';

router.route('/')
	.post((req, res) => {
		console.log ('req.body:', req.body)
		const {location} = req.body;
		getGymList(location)
			.then(list => res.send(list))
			.catch(err => res.status(400).send(err));
	})

module.exports = router;
