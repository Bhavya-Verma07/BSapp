const mongoose = require("mongoose");

const formsschema = mongoose.Schema(
  {
    lastName: String,
    firstName: String,
    mobileNumber: String,
    emailId: String,
    price: String,
    bookName: String,
    bookDetails: String,
  },
  { timestamps: true }
);

const formsmodel = mongoose.model("forms", formsschema);
module.exports = formsmodel;
