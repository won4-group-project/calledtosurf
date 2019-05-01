require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const app = express();
const controller = require("../server/controller");

const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.get("/api/shoelist", controller.getAll);

// const port = process.env.SERVER_PORT;
const port = 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
