import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import categoryConstant from "./constant/categoryConstant.js";
import { Category } from "./model/Category.js";

const port = 8080;
const app = express();

app.use(cors());
app.use(express.json());

const MONGO_CONNECTION_STRING =
  "mongodb+srv://haliukaaqua:1aydxQMAiQDkIW2o@free.7gtcecr.mongodb.net/";

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Connected to MongoDB');

    Category.insertMany(categoryConstant.categories).then((docs) => {
      console.log('Categories inserted successfully');
      console.log(docs);
    })
    .catch((err) => {
      console.error('Error inserting categories: ', err);
    })
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB: ', err);
  })

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Your server is on on the port "http:localhost:${8080}"`);
});
