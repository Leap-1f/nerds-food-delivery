import express, { response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Category } from "./model/Category.js";
import { Food } from "./model/Food.js";
import { User } from "./model/User.js";
import dotenv from "dotenv";
import { user } from "./src/router/user.js";
import { v2 as cloudinary } from "cloudinary";
import { category } from "./src/router/category.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const port = 8080;
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

app.use("/user", user);
app.use("/category", category)

let { USERNAME, PASSWORD, API_SECRET, API_KEY, CLOUD_NAME } = process.env;
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

// const MONGO_CONNECTION_STRING = `mongodb+srv://${USERNAME}:${PASSWORD}@free.7gtcecr.mongodb.net/`;

const MONGO_CONNECTION_STRING = `mongodb+srv://haliukaaqua:${PASSWORD}@free.7gtcecr.mongodb.net/`;

// const MONGO_CONNECTION_STRING =
//   "mongodb+srv://zedv:zed@foodapp.pk3ugl6.mongodb.net/";

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
// food section V IMPORTANT: Add authentication verification.
app.post("/createFood", async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  if (
    parsed.name != "" ||
    parsed.img != "" ||
    parsed.ingredient != "" ||
    parsed.price != 0
  ) {
    const createFood = Food.create({
      name: parsed.name,
      image: parsed.img,
      ingredient: parsed.ingredient,
      price: parsed.price,
      discountedPrice: parsed.discountedPrice,
    });

    (await createFood).save().then(async (a) => {
      const updateCategoryItems = await Category.findOneAndUpdate(
        { _id: parsed.catId },
        { $push: { foodId: a.id } }
      );
    });
    let output;
    async () => {
      output = await data.save();
    };
    response.status(200);
    response.send("Created");
  } else {
    response.status(400);
    response.send("Malformed Data");
  }
});
app.post("/deleteFood", async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  if (parsed.id != "") {
    const deleteFood = await Food.findByIdAndDelete(parsed.id);
    response.status(200);
    response.send("deleted");
    const category = await Category.updateMany(
      {
        foodId: { $in: [parsed.id] },
      },
      { $pull: { foodId: parsed.id } }
    );
  } else {
    response.status(400);
    response.send("Malformed Data");
  }
});
// add edit food modal
app.patch("/updateFood", async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  const food = Food.findOneAndUpdate(
    { _id: parsed.id },
    {
      name: parsed.name,
      img: parsed.img,
      ingredient: parsed.desc,
      price: parsed.price,
      discountedPrice: parsed.discountedPrice,
    }
  );
  (await food).save().then(async (a) => {
    const findAndDelete = await Category.findOneAndUpdate(
      { _id: parsed.catId },
      { $pull: { foodId: a.id } }
    );
    const updateCategoryItems = await Category.findOneAndUpdate(
      { _id: parsed.newCatId },
      { $push: { foodId: a.id } }
    );
  });
});
app.get("/getAllFood", async (request, response) => {
  const food = await Food.find({});
  const data = food.map((item) => ({
    name: item.name,
    price: item.price,
    discountedPrice: item.discountedPrice,
    id: item._id,
    img: item.image,
    ingredient: item.ingredient,
  }));
  response.status(200);
  response.send(data);
});
app.get("/searchFood", async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  const food = Food.find({ name: { $regex: parsed.name, $options: "i" } });
  response.status(200);
  response.send(food);
});
app.post("/getFoodById", async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  const food = await Food.find(
    { _id: parsed.id },
    {
      _id: 1,
      name: 1,
      image: 1,
      ingredient: 1,
      price: 1,
      discountedPrice: 1,
    }
  );
  let names = food.map((o) => ({
    name: o.name,
    id: o._id,
    ingredient: o.ingredient,
    price: o.price,
    discountedPrice: o.discountedPrice,
  }));
  response.status(200);
  response.send(food);
});

app.post("/getFoodCategory", async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  const category = await Category.find({
    foodId: { $in: [parsed.foodId] },
  });
  let names = category.map((o) => ({
    name: o.name,
    id: o.id,
  }));
  response.status(200);
  response.send(names);
});
app.post("/getFoodItemsByCategory", async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  const foods = await Category.findById(parsed.id).populate("foodId");
  var empty = [];
  if (foods.foodId != undefined) {
    const data = foods.foodId.map((item) => ({
      name: item.name,
      price: item.price,
      discountedPrice: item.discountedPrice,
      id: item._id,
      img: item.image,
      ingredient: item.ingredient,
    }));
    response.status(200);
    response.send(data);
  } else if (foods.foodId === empty) {
    response.status(400);
    response.send({ status: 400 });
  }
});
// category section
app.get("/getCategories", async (request, response) => {
  const categories = await Category.find(
    {},
    {
      _id: 1,
      name: 1,
      foodId: 1,
    }
  );
  let names = categories.map((o) => ({ name: o.name, id: o.id }));
  response.status(200);
  response.send(names);
});
app.post("/createCategory", async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  if (parsed.name != "") {
    const category = await Category.create({
      name: parsed.name,
      foodId: [],
    });
    response.status(200);
    response.send("Category Created.");
  } else {
    response.status(400);
    response.send("Bad request.");
  }
});


//added to router & controller, can delete
// app.post("/deleteCategory", async (request, response) => {
//   const stringified = JSON.stringify(request.body);
//   const parsed = JSON.parse(stringified);
//   if (parsed.id != "") {
//     const deleteCategory = await Category.deleteOne({ _id: parsed.id });

//     response.status(200);
//     response.send("Category Deleted.");
//   } else {
//     response.status(400);
//     response.send("Bad request.");
//   }
// });
app.post("/getCatName", async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  if (parsed.id != "") {
    const findCategory = await Category.find({ _id: parsed.id }, { name: 1 });
    let names = findCategory.map((o) => o.name);
    response.status(200);
    response.send(names);
  } else {
    response.status(400);
    response.send("Bad request.");
  }
});
app.post("/updateCategory", async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  if (parsed.id != "") {
    const updateCategory = await Category.findOneAndUpdate(
      { _id: parsed.id },
      { name: parsed.name }
    );
    response.status(200);
    response.send("Updated.");
  } else {
    response.status(400);
    response.send("Bad request.");
  }
});
// app.get("/food", async (req, res) => {
//   try {
//     const foods = await Food.findById();
//   res.status(200).json(foods);
//   } catch (error) {
//     console.error('Error fetching food items: ', error);
//     res.status(500).json({err: 'Internal server error'})
//   }
// })

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

//user

app.post("/user/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("Error finding user: ", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/category/add", async (req, res) => {
  const { categoryId } = req.params;
  const { name } = req.body;

  try {
    const category = await Category.findById("660bebf2d003489b7ed68c65");
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    category.foodId.push("660d3fb1eb6846f68fe86cfc");

    const updatedCategory = await category.save();
    return res.status(200).json(updatedCategory);
  } catch (error) {
    console.error("Error updating category:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/category", async (request, response) => {
  try {
    const data = await Category.findById("660bebf2d003489b7ed68c65").populate({
      path: "foodId",
      model: "Food",
    });
    console.log(data);
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

app.listen(port, () => {
  console.log(`Your server is on on the port "http:localhost:${8080}"`);
});
