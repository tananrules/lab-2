const express = require('express');
const router = express.Router();

const models = require('../models/user');

module.exports = function(passport) {

  router.post('/log-in', (req, res) => {
    passport.authenticate('local-signin', {session: false}, (err, token, user) => {
      if(err) {
        res.status(404).json(err);
      } else {
        res.status(200).json({
          token: token,
          data: user 
        });
      }
    })(req, res);
  });

  router.post('/sign-up', (req, res) => {
    passport.authenticate('local-signup', {session: false}, (err, user, info) => {
      if (err || !user) {
        res.status(400).json({
          error: 'Server error'
        });
      } else {
        res.status(201).json({
          user: {
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name
          } 
        });
      }
    })(req, res);
  });

  return router;
};
