import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Category } from "./model/Category.js";
import { Food } from "./model/Food.js";
import { User } from "./model/User.js";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import bcrypt from "bcryptjs";

const port = 8080;
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

let { USERNAME, PASSWORD, API_SECRET, API_KEY, CLOUD_NAME } = process.env;
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

const MONGO_CONNECTION_STRING = `mongodb+srv://${USERNAME}:${PASSWORD}@free.7gtcecr.mongodb.net/`;

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
  });

// cloudinary img URLs in an array
cloudinary.api.resources(function (error, result) {
  if (error) {
    console.error("Error retrieving Cloudinary resources:", error);
  } else {
    const imageUrls = result.resources.map((resource) => resource.secure_url);
    console.log("Image URLs:", imageUrls);
  }
});

//password hash
const saltRounds = 10;

const hashPassword = async () => {
  const password = "Aa12345";
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (err) {
    throw new Error("Error hashing password");
  }
};

// GET REQUESTS

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/food", async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    console.error("Error fetching food items: ", error);
    res.status(500).json({ err: "Internal server error" });
  }
});

// POST REQUESTS

// food
app.post("/food", async (req, res) => {
  const food = await Food.create({
    name: "Ногоотой шөл",
    image:
      "https://res.cloudinary.com/dqjwd8g6x/image/upload/v1712312694/food%20image/wildricesoup.jpg",
    ingredient: "мөөг, лууван, бууцай, будаа, лаврын навч, кокосын сүү, давс, перец",
    price: 18800,
  });

  res.send(food);
});

//user
app.post("/user", async (req, res) => {
  const user = await User.create({
    name: "билгүүндөл",
    email: "duluubagsh@gmail.com",
    password: await hashPassword(password),
    phoneNumber: 98765432,
  });

  res.send(user);
});

app.post("/categories", async (req, res) => {
  const { categoryId } = req.params;
  const { name } = req.body;

  try {
    const category = await Category.findById("660bebf2d003489b7ed68c65");
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    category.foodId.push("660d3f54cfa8c40044754fc8");

    const updatedCategory = await category.save();
    return res.status(200).json(updatedCategory);
  } catch (error) {
    console.error("Error updating category:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// get breakfast category
app.get("/category/breakfast", async (request, response) => {
  try {
    const data = await Category.findById("660bebf2d003489b7ed68c65").populate({
      path: "foodId",
      model: "Food",
    });
    response.send(data);
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
});

// category
app.post("/category", async (req, res) => {
  const category = await Category.create({
    name: "Snack",
    foodId: "660d2a24232379e0e5cbc095",
  });

  res.send(category);
});

//

app.listen(port, () => {
  console.log(`Your server is on on the port "http:localhost:${8080}"`);
});
