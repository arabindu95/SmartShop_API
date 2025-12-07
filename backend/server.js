import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import productRoute from "./routes/product.route.js";
import userRoute from "./routes/user.route.js";

const app = express();
dotenv.config();

//middleware
app.use(express.json());

const PORT = process.env.PORT;
const DB_URI = process.env.MONGODB_URI;

try {
  await mongoose.connect(DB_URI);
  console.log("DataBase is Connected");
} catch (error) {
  console.log(error);
}

app.get("/", (req, res) => {
  res.send("successfully created server by ");
});

app.use("/smartshop/api/product", productRoute);
app.use("/smartshop/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
