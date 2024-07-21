const express = require("express");
const path = require("path");
const port = 8000;
const db = require("./config/mongoose");
//by importing this contact
const Contact = require("./model/contact");
const app = express();

//setting up template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "assets")));

// Getting all data which is stored in database and sending to the view or template.
app.get("/", async function (req, res) {
  const fetchingDataFromDB = await Contact.find();
  return res.render("home", { contact_list: fetchingDataFromDB });
  // res.send("welcome to express");
});

app.get("/practice", function (req, res) {
  return res.render("practice", {
    title: "Lets play with ejs",
  });
});
//to create the contact
app.post("/create-contact", function (req, res) {
  Contact.create({
    name: req.body.name,
    phone: req.body.phone,
  });
  return res.redirect("/");
});
// to Delete the contact
app.get("/delete-contact/", async function (req, res) {
  //get the id from ul list by query
  let id = req.query.id;
  //find the id inside database and delete it
  await Contact.findByIdAndDelete(id);
  return res.redirect("/");
});

app.listen(port, function (err) {
  if (err) {
    console.log("There is error in running the express server" + err);
  } else {
    console.log("Express server running perfectely on port:" + port);
  }
});
