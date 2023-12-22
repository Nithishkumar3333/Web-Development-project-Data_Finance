let PersonCollection = require("../Model/Form.model");

let addperson = async (req, res) => {
  try {
    let { name, email, subject, message } = req.body;
    let addedperson = await PersonCollection.create({
      name,
      email,
      subject,
      message,
    });
    res
      .status(201)
      .json({
        error: false,
        message: "person added successfully",
        data: addedperson,
      });
  } catch (err) {
    console.log(err.message);
  }
};
