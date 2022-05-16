// Package imports
const { Router } = require('express');
const { getNewJobs } = require('./controllers');

const router = Router();
router.get('/jobs', getNewJobs);

module.exports = router;
