import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
      trim: true,
    },
    description: { type: String, required: true, maxlength: 1000, trim: true },
    image: {
      type: String,
      default: null,
      trim: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    quantity: {
      type: Number,
      default: 0,
    },
    pricePerQuantity: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
