const dance = require("../controller/danceController.js");
module.exports = (app) => {

    app.post("/users", users.create);

    app.get("/getUser/:userId/:name", users.getUserdetail);

    app.get("/getUserdata", users.getUserdata);
};