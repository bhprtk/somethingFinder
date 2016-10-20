import express from 'express';
const router = express.Router();

router.use('/yelp', require('./yelp'));

module.exports = router;
