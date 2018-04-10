const bCrypt = require('bcrypt-nodejs');
const jwt    = require('jsonwebtoken');

module.exports = function(passport, User) {
  const LocalStrategy = require('passport-local').Strategy;

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });

  passport.use('local-signin', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
      let isValidPassword = function(userpass, password) {
        return bCrypt.compareSync(password, userpass);
      }
      User.findOne({
        email: email
      }).then(function(user) {
        if (!user) {
          return done({
            error: 'Email does not exist'
          }, false);
        }
        if (!isValidPassword(user.password, password)) {
          return done({
            error: 'Incorrect password.'
          }, false);
        }
        let userinfo = {
          email: user.email,
          // first_name: user.first_name,
          // last_name: user.last_name
        };
        const token = jwt.sign(userinfo.email, 'tarunarorareactexpress');
        return done(null, token, {
          email: userinfo.email,
          first_name: userinfo.first_name,
          last_name: userinfo.last_name
        });
      }).catch(function(err) {
        console.log("Error:", err);
        return done(null, false, {
          message: 'Something went wrong with your Login'
        });
      });
    }
  ));

  passport.use('local-signup', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
      var generateHash = function(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };
      User.findOne({
        email: email
      }).then(function(user) {
        if (user) {
          return done(null, false, {
            message: 'That email is already taken'
          });
        } else {
          var userPassword = generateHash(password);
          var data = {
            email: email,
            password: userPassword,
            first_name: req.body.first_name,
            last_name: req.body.last_name
          };
          User.create(data).then(function(newUser) {
            if (!newUser) {
              return done(null, false);
            }
            if (newUser) {
              return done(null, newUser);
            }
          });
        }
      });
    }
  ));
}