import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: [3, "First name must contain at least 3 characters!"],
      maxlength: [30, "First name cannot exceed 30 characters!"],
      trim: true,
    },
    phone: {
      type: String,
      maxlength: 13,
      trim: true,
      default: null,
    },
    email: {
      type: String,
      required: true,
      validate: [validator.isEmail, "Provide a valid email address"],
    },
    photo: {
      type: String,
      default: null,
    },
    role: {
      type: Number,
      default: 0, //1->admin,0->user
    },
    password: {
      type: String, // store the encrypted password
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
