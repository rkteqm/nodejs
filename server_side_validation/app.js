const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// middleware for parsing JSON in request body
app.use(express.json());

require("./app/routes/userRouter.js")(app);

const hostname = "127.0.0.1";
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
