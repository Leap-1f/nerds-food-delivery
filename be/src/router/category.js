import { Router } from "express";
import { getCategoryFood, deleteCategory } from "../controller/category.js";

const category = Router();

category.route("/food").post(getCategoryFood);
category.route("/delete").post(deleteCategory);
export { category };
