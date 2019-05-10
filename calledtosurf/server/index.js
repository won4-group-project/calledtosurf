require("dotenv").config();
const express = require("express");
const session = require('express-session');
const bodyParser = require("body-parser");
const massive = require("massive");
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const LocalStrategy = require('passport-local');
const app = express();
const controller = require("../server/controller");
const auth = require('./controllers/auth');
// const cors = require("cors");
// app.use(cors());

// ***** App Setup ***** //
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUnitialized: true
}));
// ***** Server Setup ***** //
massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

// ***** Product Routes ***** //
app.get("/api/shoes", controller.getAll);

// ***** Authentication Routes ***** //
passport.use('local', new LocalStrategy(
  function(username, password, done) {
    db.users.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));
app.get('/login', auth.login);
app.post('/signup',auth.signup);


// const port = process.env.SERVER_PORT;
const port = 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
