const express = require('express');
const router = express.Router();
const Job = require('../models/job');
const User = require('../models/user');

//Add a new Job
router.post('/', (req, res) => {
  Job.create(req.body).then((newJob) => {
  	res.send(201).json({
  		job: {
  			title: newJob.title,
  			description: newJob.description,
  			skills: newJob.skills,
  			budget: newJob.budget,
  			bids: newJob.bids,
  			dateAdded: newJob.dateAdded
  		}
  	});
  })
});

//Get all Jobs
router.get('/', (req, res) => {
  Job.find({}, (err, jobs) => {
  	res.status(200).json(jobs);
  })
});

module.exports = router;
