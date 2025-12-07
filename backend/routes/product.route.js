import express from "express";
import { createProduct } from "../controller/product.controller.js";
import { upload } from "./../middlewares/multer.js";

const router = express.Router();
router.post("/create", upload.single("image"), createProduct);

export default router;
