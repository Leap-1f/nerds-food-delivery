import express, { response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Category } from "./model/Category.Model.js";
import { Food } from "./model/Food.Model.js";
import { food } from "./src/router/food.js";
import { order } from "./src/router/order.js";
import dotenv from "dotenv";
import { user } from "./src/router/user.js";
import { v2 as cloudinary } from "cloudinary";
import { category } from "./src/router/category.js";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";
import { User } from "./model/User.Model.js";

const port = 8080;
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

app.use("/user", user);
app.use("/category", category);
app.use("/food", food);
app.use("/order", order);

let {
  USERNAME,
  PASSWORD,
  API_SECRET,
  API_KEY,
  CLOUD_NAME,
  MAILAUTH,
  MAILPASS,
} = process.env;
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

// const MONGO_CONNECTION_STRING = `mongodb+srv://${USERNAME}:${PASSWORD}@free.7gtcecr.mongodb.net/`;

const MONGO_CONNECTION_STRING = `mongodb+srv://haliukaaqua:${PASSWORD}@free.7gtcecr.mongodb.net/`;


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
var transport = nodemailer.createTransport({
  service: "Mail.ru",
  auth: {
    user: "ivantheterrible1984@mail.ru",
    pass: MAILAUTH,
    auth: MAILPASS,
  },
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

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    res.send(user);
  } catch (err) {
    console.error("Error fetching user from backend: ", err);
    res.status(500).send("Error fetching user");
  }
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

// POST REQUESTS

// food
app.post("/food", async (req, res) => {
  const food = await Food.create({
    name: "Жимстэй йогурт",
    image:
      "https://res.cloudinary.com/dqjwd8g6x/image/upload/v1712143220/food%20image/yogurt.jpg",
    ingredient: "гүзээлзгэнэ, нэрс, бөөрөлзгөнө, ванилтай зайрмаг",
    price: 14800,
    category: "",
  });

  res.send(food);
});
app.post("/forgotPassword", async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  const user = await User.find(
    {
      email: parsed.mail,
    },
    {
      email: 1,
      id: 1,
    }
  );
  if (user.id != undefined) {
    var code = Math.floor(1000 + Math.random() * 9000);
    const users = await User.findByIdAndUpdate(user.id, {
      code: code,
    });
    const mailOptions = {
      from: "ivantheterrible1984@mail.ru", // sender address
      to: parsed.email, // list of receivers
      subject: "Password reset.", // Subject line
      text: `Your reset password code is ${code}`, // plaintext body
      html: `<b>Your reset password code is ${code}</b>`, // html body
    };
    transport.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: " + info.response);
    });
    response.status(200);
    response.send("Successfully sent email.");
  } else {
    response.status(400);
    response.send("No such email found.");
  }
});
app.post("/forgotPassword/code", async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  const user = await User.find(
    {
      email: request.mail,
    },
    {
      email: 1,
      id: 1,
      code: 1,
    }
  );
  if (id != "") {
    if (user.code === parseInt(parsed.code)) {
      // change to jwt is possible.
      var tempauth = uuidv4();
      const users = await User.findByIdAndUpdate(user.id, {
        code: tempauth,
      });
      response.status(200);
      response.send({ temp: tempauth });
    } else {
      response.status(400);
      response.send("Email is not correct.");
    }
  } else {
    response.status(400);
    response.send("Email is not correct.");
  }
});
app.post("/forgotPassword/change", async (request, repsonse) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  const user = await User.find(
    {
      email: request.mail,
    },
    {
      email: 1,
      id: 1,
      code: 1,
    }
  );
  if (id != "") {
    if (user.code === parseInt(parsed.code)) {
      const users = await User.findByIdAndUpdate(user.id, {
        password: parsed.pass,
      });
      response.status(200);
      response.send("Code is correct.");
    } else {
      response.status(400);
      response.send("Code is not correct.");
    }
  } else {
    response.status(400);
    response.send("Email is not correct.");
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
