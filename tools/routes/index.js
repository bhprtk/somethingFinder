import express from 'express';
const router = express.Router();

router.use('/pratik', require('./pratik'));

module.exports = router;
