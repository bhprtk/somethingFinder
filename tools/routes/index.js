import express from 'express';
const router = express.Router();

router.use('/yelp', require('./yelp'));
router.use('/map', require('./map'));

module.exports = router;
