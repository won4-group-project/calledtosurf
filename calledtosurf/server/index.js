require("dotenv").config();
const express = require("express");
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const bodyParser = require("body-parser");
const massive = require("massive");
const app = express();
const controller = require("../server/controller");
// const Auth = require("./controllers/auth");

// ***** App Setup ***** //
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + "/../build"));
app.use(express.static(`${__dirname}/../build`));

// ***** Server Setup ***** //
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));
// ***** Product Routes ***** //
app.get("/api/shoes", controller.getAll);

// ***** Authentication Setup ***** //
passport.use(
  new Auth0Strategy(
    {
      domain: process.env.AUTH_DOMAIN,
      clientID: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
      callbackURL: process.env.AUTH_CALLBACK
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      const db = app.get("db");
      console.log(profile.displayName, profile);
      db.find_user([profile.emails[0].value]).then(user => {
        if (user[0]) {
          return done(null, { id: user[0].id });
        } else {
          db.create_user([
            profile.displayName,
            profile.emails[0].value,
            profile.picture,
            profile.emails[0].value
          ]).then(user => {
            return done(null, { id: user[0].id });
          });
        }
      });
    }
  )
);

// ***** Authentication Routes  ***** //

// app.get("/login/", Auth.login);
// app.post("/signup", Auth.signup);

app.get("/auth", passport.authenticate("auth0"));

app.get(
  "/auth/callback",
  passport.authenticate("auth0", {
    successRedirect: `${process.env.FRONTEND_URL}#/login`,
    failureRedirect: `${process.env.FRONTEND_URL}#/`
  })
);

<<<<<<< HEAD
app.get("/login/", Auth.login);
app.get("/api/shoes/:id", products_controller.getOne);

app.post("/signup", Auth.signup);
=======
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  app
    .get("db")
    .find_session_user([user.id])
    .then(user => {
      return done(null, user[0]);
    });
});

app.get("/auth/me", (req, res, next) => {
  if (!req.user) {
    return res.status(401).send("Log in required");
  } else {
    return res.status(200).send(req.user);
  }
});

app.get("/logout", (req, res) => {
  console.log(res);
  req.logOut();
  return res.redirect("/");
});
>>>>>>> 3aee7bf619090d5312b42e2aba34c14359043b40

// const port = process.env.SERVER_PORT;
const port = 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
