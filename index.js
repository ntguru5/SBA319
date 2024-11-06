import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()); // for parsing application/json

// connect to database
await mongoose.connect(process.env.ATLAS_URI);
console.log("Connected to database");

// start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
