const { Schema, model } = require("mongoose");

let formSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "name is mandatory"],
    },
    email: {
      type: String,
      required: [true, "email is mandatory"],
      unique: true,
    },
    subject: {
      type: String,
      required: [true, "subject is mandatory"],
    },
    message: {
      type: String,
      required: [true, "message is mandatory"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("FormData", formSchema);
