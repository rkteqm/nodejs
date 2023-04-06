const sql = require("./connect.js");

// constructor
const user = function (user) {
  this.email = user.email;
  this.firstname = user.firstname;
  this.lastname = user.lastname;
  this.dob = user.dob;
};

user.getUserdetail = (req, result) => {
  console.log(req);
  let sqlQuery = "SELECT firstname, lastname, email, dob FROM employee where `id` = ? and firstname = ?";
  sql.query(sqlQuery, [parseInt(req.params.userId), req.params.name], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      result(null, res);
      console.log("found Users: ", res);
      return;
    }
    // not found User with the id
    result({ kindL: "not_found" }, null);
    return;
  });
};

user.getUserdata = (status, result) => {
  let sqlQuery = "SELECT firstname, lastname, email, dob FROM employee";
  sql.query(sqlQuery, [], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      result(null, res);
      console.log("found Users: ", res);
      return;
    }
    // not found User with the id
    result({ kindL: "not_found" }, null);
    return;
  });
};

module.exports = user;
