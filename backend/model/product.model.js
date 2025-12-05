import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  titile: {
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
    image: {
      url: {
        type: String,
        required: true,
      },
      public_id: {
        type: String,
        required: true,
      },
    },
  },
  creatorId: {
    creatorId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
});

export const Product = mongoose.model("Product", ProductSchema);
