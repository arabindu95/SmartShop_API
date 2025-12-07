import { Product } from "../model/product.model.js";
import { uploadToCloudinary } from "./../utility/uploadToCloudinary.js";

//*************************** cretate Prodcuts******************* */
export const createProduct = async (req, res) => {
  try {
    //file cheacking
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No File Uploaded",
      });
    }

    //upload to cloudinary
    const uploadImage = await uploadToCloudinary(req.file.buffer, "products");

    //parese Data from body
    const { title, description, price } = req.body;

    if (!title || !description || !price) {
      return res.status(400).json({ errors: "All fields are mandotory" });
    }

    //save to DataBase
    const ProductData = {
      title,
      description,
      price,
      image: { url: uploadImage.secure_url, public_id: uploadImage.public_id },
    };
    const product = await Product.create(ProductData);
    res.status(200).json({
      message: "product created successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "error creating productlist" });
  }
};

//***********************get Products****************************/
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ errors: "error in get courses", error });
  }
};
