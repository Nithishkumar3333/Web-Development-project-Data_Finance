const mongoose = require("mongoose");

let connectToMonoDb = (url) => {
  return mongoose.connect(url);
};

module.exports = connectToMonoDb;
