const users = require("../controller/userController.js");
const { check, validationResult, body } = require("express-validator");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.render("contact", { errors: "", formdata: "" });
  });

  app.post(
    "/",
    [
      check("firstname").notEmpty().withMessage("First Name is required"),
      check("lastname").notEmpty().withMessage("Last Name is required"),
      check("email").notEmpty().withMessage("Email is required"),
      check("password").notEmpty().withMessage("Password is required"),
      check("confirm_password").notEmpty().withMessage("Confirm Password is required"),
      check("message").notEmpty().withMessage("Message is required"),
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.render("contact", { errors: errors.mapped(), formdata: req.body });
      } else {
        res.render("contact", { errors: "", formdata: req.body });
      }
    }
  );

    app.post("/users", users.create);
};
