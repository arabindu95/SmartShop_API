import express from "express";
import userMiddleware from "./../middlewares/user.midl.js";
import {
  addToCart,
  decrementCartItem,
  getCart,
  removeFromCart,
} from "../controller/cart.controller.js";

const router = express.Router();

router.post("/add", userMiddleware, addToCart);
router.post("/decrement", userMiddleware, decrementCartItem);
router.get("/getcart", userMiddleware, getCart);
router.delete("/remove/:productId", userMiddleware, removeFromCart);

export default router;
