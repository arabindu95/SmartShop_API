import express from "express";
import {
  createProduct,
  deleteProducts,
  getProducts,
  updateProducts,
} from "../controller/product.controller.js";
import { upload } from "./../middlewares/multer.js";
import userMiddleware from "../middlewares/user.midl.js";

const router = express.Router();

router.get("/getproducts", userMiddleware, getProducts);

//for admin
router.post("/create", upload.single("image"), createProduct);
router.put("/update/:productId", upload.single("image"), updateProducts);
router.delete("/delete/:productId", deleteProducts);

export default router;
