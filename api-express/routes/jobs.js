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
  Job.find({}).populate('owner', '-password').then((jobs) => {
  	res.status(200).json(jobs);
  })
});

router.get('/:id', (req, res) => {
  // let response = "";
  Job.findById(req.params.id).populate('owner', '-password').then((singleJob) => {
  	res.status(200).json(singleJob);
  });
});

module.exports = router;
