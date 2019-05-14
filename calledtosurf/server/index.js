require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const app = express();
const controller = require("../server/controller");
const Auth = require("./controllers/auth");
// const cors = require("cors");
app.use(bodyParser.json());
// app.use(cors());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.get("/api/shoes", controller.getAll);

// ***** Authentication ***** //

app.get("/login/", Auth.login);
app.get("/api/shoes/:id", controller.getOne);

// app.post("/signup", Auth.signup);

// const port = process.env.SERVER_PORT;
const port = 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
