const mongoose = require("mongoose");
const contSchema = new mongoose.Schema({
  name: {
    type: String,
    reuired: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model("Each_List", contSchema);
module.exports = Contact;
