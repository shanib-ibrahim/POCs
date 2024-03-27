import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    product: [
      {
        product: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
        },
        quantity: { type: Number, default: 0 },
        price: { type: Number, default: 0 },
      },
    ],
    totalAmount: Number,
  },
  { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
