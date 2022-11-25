const express = require("express");
const databaseConnection = require("./connector/dbConnection");
const app = express();
const FORM_MODEL = require("./model/formdetails");
app.use(express.json());

//posting form details
app.post("/api/saveinfo", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      mobileNumber,
      emailId,
      price,
      bookName,
      bookDetails,
    } = req.body;
    const newDetails = new FORM_MODEL({
      firstName,
      lastName,
      mobileNumber,
      emailId,
      price,
      bookName,
      bookDetails,
    });
    await newDetails.save();
    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false });
  }
});

//getting form info
app.get("/api/gettingDetail", async (req, res) => {
    try {
      const detaildata = await FORM_MODEL.find().sort({ createdAt: -1 });
      return res.json({ data: detaildata, success: true });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, error: error.message });
    }
  });



databaseConnection();
//creating server

let port = 8000;
app.listen(port, () => console.log(`SERVER IS RUNNING AT ${port}`));
