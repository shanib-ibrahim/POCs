import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
      trim: true,
    },
    logo: {
      type: String,
      default: null,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", categorySchema);
