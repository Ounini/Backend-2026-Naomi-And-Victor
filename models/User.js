const mongoose = require("mongoose");

// Define Schema
const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user", enum: ["admin", "user"] },
  profilePicture: String,
});

// Create Model
const User = mongoose.model("User", userSchema);
module.exports = User;
