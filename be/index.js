import express, { response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import categoryConstant from "./constant/categoryConstant.js";
import { Category } from "./model/Category.js";
import { Food, foodSchema } from "./model/Food.js";
import { parse } from "path";

const port = 8080;
const app = express();

app.use(cors());
app.use(express.json());

const MONGO_CONNECTION_STRING =
  "mongodb+srv://zedv:zed@foodapp.pk3ugl6.mongodb.net/";

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
  });

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
    const deleteFood = Food.deleteOne({ _id: parsed.id });
    response.status(200);
    response.send("deleted");
  } else {
    response.status(400);
    response.send("Malformed Data");
  }
});
// add edit food modal
app.post("/updateFood", async (request, response) => {});
app.get("/getAllFood", async (request, response) => {
  const food = Food.find({});
  response.status(200);
  response.send(food);
});
app.get("/searchFood", async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  const food = Food.find({ name: { $regex: parsed.name, $options: "i" } });
  response.status(200);
  response.send(food);
});
app.get("/getCategoryFood", async (request, response) => {
  const categories = await Category.find(
    {},
    {
      _id: 1,
      name: 1,
      foodId: 1,
    }
  ).populate("foodId");
  response.status(200);
  response.send(categories);
});

app.get("/getCategories", async (request, response) => {
  const categories = await Category.find(
    {},
    {
      _id: 1,
      name: 1,
      foodId: 0,
    }
  );
  let names = categories.map((o) => ({ name: o.name, id: o.id }));
  response.status(200);
  response.send(names);
});
app.listen(port, () => {
  console.log(`Your server is on on the port "http:localhost:${8080}"`);
});
