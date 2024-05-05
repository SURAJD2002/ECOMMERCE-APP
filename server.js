import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import path from "path";

//configure env
dotenv.config();

//database config
connectDB();

//rest objest
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//ROUTES
// server.js
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//static
app.use(
  express.static(
    path.join(
      __dirname,
      "/Users/SawTechnical/Desktop/ECOMMERCE APP/client/build"
    )
  )
);

app.get("*", function (req, res) {
  res.sendFile(
    path.join(
      __dirname,
      "/Users/SawTechnical/Desktop/ECOMMERCE APP/client/build/index.html"
    )
  );
});

//rest api
app.get("/", (req, res) => {
  res.send("<h1>welcome to ecommerce</h1>");
});

// PORT
const PORT = process.env.PORT || 8080;

//run listen

app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white
  );
});
