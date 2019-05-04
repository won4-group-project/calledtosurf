require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const app = express();
const controller = require("../server/controller");
const Authentication = require("./controllers/authentication.js");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.get("/api/shoes", controller.getAll);

// Authentication 

app.get("/api/login/", Authentication.login);
app.post("/api/signup", Authentication.signUp);

// const port = process.env.SERVER_PORT;
const port = 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
