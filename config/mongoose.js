const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://sanauaransari99:SiuQpmCkmQM4LUyL@cluster0.rsjullk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error while connecting."));
//5)printing msg on console for "connection is opened for us to save the data"
db.once("open", function () {
  console.log("successfully connected to the db");
});
// "mongodb://127.0.0.1:27017/practice_contact_list"
