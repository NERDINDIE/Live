// app.js
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy;

const app = express();

app.use(session({ secret: 'SECRET' }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new OAuth2Strategy({
    authorizationURL: 'https://auth.example.com/oauth2/authorize',
    tokenURL: 'https://auth.example.com/oauth2/token',
    clientID: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
    callbackURL: 'https://yourapp.com/auth/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ oauthId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get('/auth/example',
  passport.authenticate('oauth2'));

app.get('/auth/callback', 
  passport.authenticate('oauth2', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
