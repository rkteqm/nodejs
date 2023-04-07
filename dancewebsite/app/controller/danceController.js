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
