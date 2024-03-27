import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
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
    paymentType: { type: String, enum: ["COD", "ONLINE"], default: "COD" }, //COD,ONLINE
    firstName: { type: String, required: true, maxlength: 50, trim: true },
    secondName: { type: String, default: null, maxlength: 50 },
    address: { type: String, required: true },
    address2: { type: String, default: null },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    status: {
      type: String,
      enum: ["initiated", "pending", "processing", "completed", "cancel"],
      default: "initiated",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
