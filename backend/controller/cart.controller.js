import { Cart } from "../model/cart.model.js";

//*-********** Add to Cart *****************
export const addToCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({ message: " no product here" });
    }

    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = await Cart.create({
        user: userId,
        items: [{ product: productId, quantity: 1 }],
      });
    } else {
      const itemIndex = cart.items.findIndex((item) =>
        item.product.equals(productId)
      );

      //update cart
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += 1;
      } else {
        cart.items.push({ product: productId, quantity: 1 });
      }
      await cart.save();
    }
    res.status(200).json({
      success: true,
      message: "product added successfully",
      cart,
    });
    console.log("product added");
  } catch (error) {
    res
      .status(500)
      .json({ message: " something went wrong in addToCart", error });
  }
};

//********************** Get Cart *****************
export const getCart = async (req, res) => {
  try {
    console.log("USER ID:", req.userId);

    const userId = req.userId;
    const cart = await Cart.findOne({ user: userId }).populate(
      "items.product",
      "title price image"
    );
    if (!cart) {
      return res.status(200).json({
        cart: { items: [] },
        totalAmount: 0,
      });
    }

    let totalAmount = 0;

    cart.items.forEach((item) => {
      totalAmount += item.product.price * item.quantity;
    });

    res.status(200).json({ cart, totalAmount });
    console.log("CART:", cart);
  } catch (error) {
    res.status(500).json({ message: "something went wrong in getCart", error });
  }
};

//******************* Remove from Cart ********************
export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const cart = await Cart.findOne({ user: req.userId });
    if (!cart) {
      return res.status(404).json({ message: "cart not find" });
    }
    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId
    );
    await cart.save();
    res.status(200).json({
      success: true,
      message: " product removed successfully",
      cart,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong in removeFromCart", error });
  }
};
