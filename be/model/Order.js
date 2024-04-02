import mongoose, { Schema, mongo } from "mongoose";
import { ORDER_PROCESS } from "../constant/orderConstants";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  foods: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Food", required: true }
  ],
  totalPrice: {
    type: Number,
    required: true,
  }, process: {
    type: String,
    enum: Object.values(ORDER_PROCESS),
    default: ORDER_PROCESS.PENDING,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  district: {
    type: String,
    required: true,
  },
  khoroo: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
});

export const Order = mongoose.model('Order', orderSchema)