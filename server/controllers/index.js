'use strict';

// Imports
const Jobs = require('../models/jobs');
const newJobs = require('../models/reed');

async function getAllJobs(_, res) {
  try {
    const allJobs = await Jobs.getAllJobs();
    res.status(200);
    res.send(allJobs);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

async function getNewJobs(req, res) {
  console.log('getNewJobs()');
  try {
    const allJobs = await newJobs();
    res.status(200);
    res.send(allJobs);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

module.exports = { getAllJobs, getNewJobs };
