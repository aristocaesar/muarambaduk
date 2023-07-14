const passport = require('passport');
const Axios = require('./axios');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_SECRET_ID}`,
      callbackURL: `${process.env.BASE_URL}auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      await Axios.post('users/register', {
        fullname: profile.displayName,
        email: profile.emails[0].value,
        images: profile.photos[0].value,
      }).catch((error) => {});
      done(null, profile);
    }
  )
);

module.exports = { passportConfig: passport };
