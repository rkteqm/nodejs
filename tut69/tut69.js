const express = require("express");
const app = express();
app.use(express.urlencoded());

const hostname = "127.0.0.1";
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.get("/", (req, res) => {
  res.status(200).sendFile("index.html", { root: __dirname });
});

app.get("/rahul", (req, res) => {
  console.log("/rahul URL hitted...");
  res.send({ message: "Success" });
});

require("./app/routes/userRouter.js")(app);