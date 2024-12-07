const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlength: [3, "use min length 3"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    minlength: [5, "minimum length is 5"],
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minlength: [6, "minimum length should be 6"],
  },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
