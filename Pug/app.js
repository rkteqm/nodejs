const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static"));
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set("view engine", "pug");// Set the template engine as pug
app.set("views", path.join(__dirname, "views"));// set the views directory

// ENDPOINTS
app.get('/', (req, res) =>{
  const con = "This is the bad game which played all around the world"
  const params = {'title': 'Home', 'content': con }
  res.status(200).render('index.pug', params);
});

app.post('/', (req, res) =>{
  const con = "This is the bad game which played all around the world";
  firstname = req.body.firstname;
  lastname = req.body.lastname;
  email = req.body.email;
  dob = req.body.dob;
  // console.log(req.body);
  const params = {'title': 'Home', 'content': con, 'firstname': firstname, 'lastname': lastname, 'email': email, 'dob': dob};
  res.status(200).render('index.pug', params);
});

app.get('/about', (req, res) =>{
  const con = "This is about page"
  const params = {'title': 'About', 'content': con }
  res.status(200).render('about.pug', params);
});

app.get('/contact', (req, res) =>{
  const con = "This is contact us page"
  const params = {'title': 'Contact us', 'content': con }
  res.status(200).render('contact.pug', params);
});

app.listen(port, () => {
  console.log(`This application started successfully on port ${port}`);
});
