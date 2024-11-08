import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import dogRoutes from './routes/dogs.js';
import bathroomLogRoutes from './routes/bathroomLogs.js';
import healthMetricRoutes from './routes/healthLogs.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()); // for parsing application/json

// connect to database
await mongoose.connect(process.env.ATLAS_URI);
console.log("Connected to database");

app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});

app.use('/dogs', dogRoutes);
app.use('/bathroom-logs', bathroomLogRoutes);
app.use('/health-metrics', healthMetricRoutes);

// start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
