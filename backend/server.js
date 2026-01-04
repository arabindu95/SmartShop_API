import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import productRoute from "./routes/product.route.js";
import userRoute from "./routes/user.route.js";
import adminRoute from "./routes/admin.route.js";
import cartRoute from "./routes/cart.route.js";
import orderRoute from "./routes/order.route.js";

const app = express();
dotenv.config();

//cross platform cookie seend
app.set("trust proxy", 1);

//cors
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//middleware
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;
const DB_URI = process.env.MONGODB_URI;

try {
  await mongoose.connect(DB_URI);
  console.log("DataBase is Connected");
} catch (error) {
  console.log(error);
}

app.get("/", (req, res) => {
  res.send("successfully created smartShoop server by Arabindu");
});

app.use("/smartshop/api/product", productRoute);
app.use("/smartshop/api/user", userRoute);
app.use("/smartshop/api/cart", cartRoute);
app.use("/smartshop/api/admin", adminRoute);
app.use("/smartshop/api/order", orderRoute);

app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
