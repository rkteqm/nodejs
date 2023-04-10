const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult, body } = require("express-validator");
const ejs = require("ejs");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// middleware for parsing JSON in request body
app.use(express.json());

app.get("/", (req, res) => {
  res.render("contact", { errors: "", formdata: "" });
});

app.post(
  "/",
  [
    check("name").notEmpty().withMessage("Name is required"),
    check("email").notEmpty().withMessage("Email is required"),
    check("message").notEmpty().withMessage("Message is required"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("contact", { errors: errors.mapped(), formdata: req.body });
    }else{
        res.render("contact", { errors: "", formdata: req.body });
    }
  }
);

const hostname = "127.0.0.1";
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
