const user = require("../model/userModel.js");

// create user
exports.create = async (req, res) => {
  try {
    user.create(req, (err, data) => {
      let responsecode, responseobj;
      if (err) {
      //  logger.logError(req.body, err, 0, "create");
        responsecode = 401;
        responseobj = {
          status: 0,
          response: "error",
          message: err.message || "Some error occurred while updating info",
        };
      } else {
        console.log("***", res);
        responsecode = 200;
        responseobj = {
          status: 1,
          id: data,
          response: "successful",
        };
      }
      return res.status(responsecode).send({
        response: responseobj,
      });
    });
  } catch (error) {
    console.log(req.body, error, 0, "create");
    return res.status(500).send({
      message: "Sorry - something went wrong .Please try again",
    });
  }
};

// Get all users
exports.getUserdata = async (req, res) => {
  try {
    user.getUserdata(req, (err, data) => {
      let responsecode, responseobj;
      if (err) {
       logger.logError(req.body, err, 0, "getUserdata");
        responsecode = 401;
        responseobj = {
          status: 0,
          response: "error",
          message: err.message || "Some error occurred while updating info",
        };
      } else {
        console.log("***", res);
        responsecode = 200;
        responseobj = {
          status: 1,
          data: data,
          response: "successful",
        };
      }
      return res.status(responsecode).send({
        response: data,
      });
    });
  } catch (error) {
    console.log(req.body, error, 0, "getUserdata");
    return res.status(500).send({
      message: "Sorry - something went wrong .Please try again",
    });
  }
};

// Get users detail from id
exports.getUserdetail = async (req, res) => {
  try {
    user.getUserdetail(req, (err, data) => {
      let responsecode, responseobj;
      if (err) {
        logger.logError(req.body, err, 0, "getUserdetail");
        responsecode = 401;
        responseobj = {
          status: 0,
          response: "error",
          message: err.message || "Some error occurred while updating info",
        };
      } else {
        console.log("***", res);
        responsecode = 200;
        responseobj = {
          status: 1,
          data: data,
          response: "successful",
        };
      }
      return res.status(responsecode).send({
        response: data,
      });
    });
  } catch (error) {
    console.log(req.body, error, 0, "getUserdetail");
    return res.status(500).send({
      message: "Sorry - something went wrong .Please try again",
    });
  }
};
