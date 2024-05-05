import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  CreateCategoryController,
  categoryController,
  deleteCategoryControllerer,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/CategoryController.js";

const router = express.Router();

//Routes
//CREATE CATEGORY
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  CreateCategoryController
);
//UPDATE CATEGORY
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);
//GET ALL CATEGORY
router.get("/get-category", categoryController);

//SINGLE CATEGORY
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryControllerer
);
export default router;
