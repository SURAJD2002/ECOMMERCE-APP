import express from "express";

import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router
const router = express.Router();

//routing
//REGISTER || METHOD POST
// authRoute.js
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//FORGET PASSWORD
router.post("/forget-password", forgotPasswordController);

//TEST
router.get("/test", requireSignIn, isAdmin, testController);

//PROTECTED user ROUTE AUTH
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//PROTECTED admin ROUTE AUTH
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

// All admin orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

//order update status

router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
