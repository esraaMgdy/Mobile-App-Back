const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create feedback Schema
const FeedbackSchema = new Schema({
  title: {
    type: String,
    required: [true, "author is required!"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    required: [true, "content is required!"],
  },
});

// Create achievement Schema
const AchievementSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is required!"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: [true, "description is required!"],
  },
});

// creating user schema
const userSchema = new Schema({
  code: {
    type: String,
    required: [true, "User code is required!"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "User name is required!"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required!"],
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
  },
  image: {
    type: String,
  },
  role: {
    type: String,
  },
  type: {
    type: String,
    required: [true, "user type is required!"],
  },
  committee: {
    type: String,
    required: [true, "user committee is required!"],
  },
  feedbacks: [FeedbackSchema],
  achievements: [AchievementSchema],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
