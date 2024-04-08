import {Router} from 'express';
import { getCategoryFood, deleteCategory, createCategory, getCatName, updateCategory, getCategories } from '../controller/category.js';

const category = Router();

category.route("/food").post(getCategoryFood);
category.route("/delete").post(deleteCategory);
category.route("/create").post(createCategory);
category.route("/getname").post(getCatName);
category.route("/update").post(updateCategory)
category.route("/").get(getCategories);
export {category};
