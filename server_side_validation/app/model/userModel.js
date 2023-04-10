const sql = require("./connect.js");

// constructor
const user = function (user) {
  this.email = user.email;
  this.firstname = user.firstname;
  this.lastname = user.lastname;
  this.dob = user.dob;
};

user.create = (req, result) => {
  console.log(req.body);
  var body = [
  req.body.firstname,
  req.body.lastname,
  req.body.email,
  req.body.dob,
  ]
  let sqlQuery = "INSERT INTO employee(`firstname`, `lastname`, `email`, `dob`) values (?)";
  sql.query(sqlQuery, [body], (err, res) => {
    console.log(err, res, '*****************');
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
    if (res.affectedRows) {
      result(null, res.insertId);
      console.log("User already exists.", res);
      return;
    }
    // not found User with the id
    result({ kindL: "not_found" }, null);
    return;
  });
};

// user.getUserdetail = (req, result) => {
//   console.log(req);
//   let sqlQuery = "SELECT firstname, lastname, email, dob FROM employee where `id` = ? and firstname = ?";
//   sql.query(sqlQuery, [parseInt(req.params.userId), req.params.name], (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }
//     if (res.length) {
//       result(null, res);
//       console.log("found Users: ", res);
//       return;
//     }
//     // not found User with the id
//     result({ kindL: "not_found" }, null);
//     return;
//   });
// };

// user.getUserdata = (status, result) => {
//   let sqlQuery = "SELECT firstname, lastname, email, dob FROM employee";
//   sql.query(sqlQuery, [], (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }
//     if (res.length) {
//       result(null, res);
//       console.log("found Users: ", res);
//       return;
//     }
//     // not found User with the id
//     result({ kindL: "not_found" }, null);
//     return;
//   });
// };

module.exports = user;
