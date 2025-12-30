import { Order } from "../model/order.model.js";

export const placeOrder = async (req, res) => {
  try {
    const userId = req.userId;
    const { address, items, totalAmount } = req.body;
    if (!address || !items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "invalid order data",
      });
    }
    const orderItems = items.map((item) => ({
      product: item.product._id,
      title: item.product.title,
      quantity: item.quantity,
      price: item.product.price,
    }));
    const order = await Order.create({
      user: userId,
      items: orderItems,
      address,
      totalAmount,
    });
    res.status(201).json({
      success: true,
      message: "order placed successfully",
      order,
    });
  } catch (error) {
    console.log(error, "error in order model");
    res.status(500).json({
      success: false,
      message: "Order failed",
    });
  }
};