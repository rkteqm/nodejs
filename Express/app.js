const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// for serving static files
app.use("/static", express.static("static"));

// Set the template engine as pug
app.set("view engine", "pug");

// set the views directory
app.set("views", path.join(__dirname, "views"));

// our pug demo endpoint
app.get("/demo", (req, res) => {
  res.status(200).render("demo", { title: "Hey", message: "Hello there! thanks for tellimg me how to use pug!" });
});

app.get("/", (req, res) => {
  res.send("This is my first express app...");
});

app.get("/about", (req, res) => {
  res.status(200).send("This is about page of my first express app...");
});

app.post("/about", (req, res) => {
  res.send("This is post request on about page of my first express app...");
});

app.listen(port, () => {
  console.log(`This application started successfully on port ${port}`);
});
