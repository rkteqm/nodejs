const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static"));
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set("view engine", "pug"); // Set the template engine as pug
app.set("views", path.join(__dirname, "views")); // set the views directory

// ENDPOINTS
app.get("/", (req, res) => {
  const con = "This is about page";
  const params = { title: "About", content: con };
  res.status(200).render("index.pug", params);
});

app.listen(port, () => {
  console.log(`This application started successfully on port ${port}`);
});
