import { Product } from "../model/product.model.js";
import { uploadToCloudinary } from "./../utility/uploadToCloudinary.js";

//*************************** cretate Prodcuts********************/
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
      success: true,
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

//*****************************update productsa********************/
export const updateProducts = async (req, res) => {
  try {
    const { productId } = req.params;
    const { title, description, price } = req.body;
    let updatedFormData = { title, description, price };

    //only for if new image uploaded
    let uploaded = null;
    if (req.file) {
      uploaded = await uploadToCloudinary(req.file.buffer, "products");
      updatedFormData.image = {
        url: uploaded.secure_url,
        public_id: uploaded.public_id,
      };
    }

    const updateProduct = await Product.findByIdAndUpdate(
      productId,
      updatedFormData,
      { new: true }
    );
    res.status(200).json({
      message: "product updated successfully",
      product: updateProduct,
    });
    console.log(updateProduct);
  } catch (error) {
    res.status(500).json({ error: "error in product updated", error });
    console.log("errors in productupdated", error);
  }
};

//************************Delete products********************/
export const deleteProducts = async (req, res) => {
  try {
    const { productId } = req.params;
    const deleteData = await Product.findByIdAndDelete(productId);

    if (!deleteData) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res
      .status(200)
      .json({ success: true, message: "product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error, message: "problem in delete Products" });
  }
};
