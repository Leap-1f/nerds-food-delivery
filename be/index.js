import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Category } from "./model/Category.js";
import { Food } from "./model/Food.js";

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
    }
  );
  let names = food.map((o) => ({
    name: o.name,
    id: o._id,
    ingredient: o.ingredient,
    price: o.price,
  }));
  response.status(200);
  response.send(food);
});
app.post("/getCategoryFood", async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  const categories = await Category.find(
    { _id: parsed.id },
    {
      _id: 1,
      name: 1,
      foodId: 1,
    }
  ).populate("foodId");
  response.status(200);
  response.send(categories);
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
app.post("/deleteCategory", async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  if (parsed.id != "") {
    const deleteCategory = await Category.deleteOne({ _id: parsed.id });
    response.status(200);
    response.send("Category Deleted.");
  } else {
    response.status(400);
    response.send("Bad request.");
  }
});
app.post("/getCatName", async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  if (parsed.id != "") {
    const findCategory = await Category.find({ _id: parsed.id }, { name: 1 });
    response.status(200);
    response.send(findCategory);
  } else {
    response.status(400);
    response.send("Bad request.");
  }
});
app.listen(port, () => {
  console.log(`Your server is on on the port "http:localhost:${8080}"`);
});
