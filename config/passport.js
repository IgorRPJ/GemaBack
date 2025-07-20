const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
require('dotenv').config()

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  const user = {
    id: profile.id,
    displayName: profile.displayName,
    email: profile.emails[0].value.toLowerCase()
  }
  return done(null, user)
}))

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((obj, done) => done(null, obj))

module.exports = passport
