import express from "express";
import userMiddleware from "../middlewares/user.midl.js";
import { placeOrder } from "../controller/order.controller.js";
const router = express.Router();

router.post("/place", userMiddleware, placeOrder);
export default router;
