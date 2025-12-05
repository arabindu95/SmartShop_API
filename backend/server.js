import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

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

app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
