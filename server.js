import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
import { fileURLToPath } from 'url';

// Configure environment variables
dotenv.config();

// Database configuration
connectDB();

// ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// Serve static files from client/build directory
const buildPath = path.join(__dirname, "../client/build");
app.use(express.static(buildPath));

// Catch-all route for client-side routing
app.get("*", function (req, res) {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Define port
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
