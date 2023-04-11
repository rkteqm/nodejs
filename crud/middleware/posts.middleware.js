module.exports = reqFilter = (req, res, next) => {
  if (!req.query.id) {
    res.send("Please provide your id");
  } else if (req.query.id != 123456) {
    res.send("Please provide valid id");
  } else {
    next();
  }
};
