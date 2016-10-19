import express from 'express';
const router = express.Router();

router.route('/')
	.get((req, res) => {
		const pratik = {
			name: 'pratik',
			language: 'javascript'
		}
		res.send(pratik);
	})

module.exports = router;
