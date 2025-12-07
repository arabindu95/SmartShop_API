import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    url: { type: String, required: true },
    public_id: { type: String, required: true },
  },
});

export const Product = mongoose.model("Product", ProductSchema);
