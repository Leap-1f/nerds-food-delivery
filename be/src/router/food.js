import {Router} from 'express';
import { createFood, deleteFood, getAllFood, getFoodItemsByCategory, searchFood, updateFood } from '../controller/food.js';

const food = Router();

food.route("/create").post(createFood);
food.route("/delete").post(deleteFood);
food.route("/update").post(updateFood)
food.route("/").get(getAllFood).post(getFoodItemsByCategory);
food.route("/search").get(searchFood);
export {food};