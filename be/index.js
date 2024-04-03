import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Category } from "./model/Category.js";
import { Food } from "./model/Food.js";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

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

// GET REQUESTS

app.get("/", (request, response) => {
  response.send("Hello World!");
});

// POST REQUESTS

// food
app.post("/food", async (req, res) => {
  const food = await Food.create({
    name: "Жимстэй йогурт",
    image:
      "https://res.cloudinary.com/dqjwd8g6x/image/upload/v1712143220/food%20image/yogurt.jpg",
    ingredient: "гүзээлзгэнэ, нэрс, бөөрөлзгөнө, ванилтай зайрмаг",
    price: 14800,
  });

  res.send(food);
});

// category
app.post("/category", async (req, res) => {
  const category = await Category.create({
    name: "Snack",
    foodId: "660d2a24232379e0e5cbc095",
  });

  res.send(category);
});

app.listen(port, () => {
  console.log(`Your server is on on the port "http:localhost:${8080}"`);
});
