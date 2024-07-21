const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/practice_contact_list");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error while connecting."));
//5)printing msg on console for "connection is opened for us to save the data"
db.once("open", function () {
  console.log("successfully connected to the db");
});
