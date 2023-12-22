const express = require("express");
let formcollection = require("../server/Model/Form.model");
const { mongoose } = require("mongoose");

require("dotenv").config();
var cors = require("cors");
let app = express();
app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
  let { username, email, subject, message } = req.body;
  let addDataToDB = formcollection.create({
    username,
    email,
    subject,
    message,
  });
  res.status("user data added successfully", addDataToDB);
});

let connect = async () => {
  try {
    app.listen(4000, () => {
      console.log("Server is Running on port 4000 ");
    });
    await mongoose.connect("mongodb://127.0.0.1:27017/staff");

    console.log("db connected");
  } catch (err) {}
};
connect();
