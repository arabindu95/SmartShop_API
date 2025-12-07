import express from "express";
import {
  createProduct,
  getProducts,
} from "../controller/product.controller.js";
import { upload } from "./../middlewares/multer.js";

const router = express.Router();
router.post("/create", upload.single("image"), createProduct);

router.get("/getproducts", getProducts);

export default router;
