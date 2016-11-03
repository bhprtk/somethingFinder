import express from 'express';
const router = express.Router();
import { getDistance } from '../controllers/map';

router.route('/')
	.post((req, res) => {
		const { data } = req.body;
		getDistance(data)
			.then(distanceData => res.send(distanceData))
			.catch(err => res.status(400).send(err));
	})

module.exports = router;
