import express from "express";
import userMiddleware from "./../middlewares/user.midl.js";
import {
  addToCart,
  getCart,
  removeFromCart,
} from "../controller/cart.controller.js";

const router = express.Router();

router.post("/add", userMiddleware, addToCart);
router.get("/getcart", userMiddleware, getCart);
router.delete("/remove/:productId", userMiddleware, removeFromCart);

export default router;
