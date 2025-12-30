import mongoose from "mongoose";
const addressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fullname: String,
    email: String,
    phone: Number,
    address: String,
    state: String,
    city: String,
    pincode: Number,
  },
  { timestamps: true }
);

export const Address = mongoose.model("Address", addressSchema);
