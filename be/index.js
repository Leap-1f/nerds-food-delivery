import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Category } from "./model/Category.js";
import { Food } from "./model/Food.js";
import {User} from "./model/User.js";
import {User} from "./model/User.js";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const port = 8080;
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

let { USERNAME, PASSWORD, API_SECRET, API_KEY, CLOUD_NAME, JWT_SECRET } = process.env;
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

// const MONGO_CONNECTION_STRING = `mongodb+srv://${USERNAME}:${PASSWORD}@free.7gtcecr.mongodb.net/`;

const MONGO_CONNECTION_STRING = `mongodb+srv://haliukaaqua:${PASSWORD}@free.7gtcecr.mongodb.net/`;


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

//password hash
const saltRounds = 10;

const hashPassword = async () => {
  const password = "Aa12345";
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (err) {
    throw new Error('Error hashing password');
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
    throw new Error('Error hashing password');
  }
}





}






// GET REQUESTS

app.get("/", (request, response) => {
  response.send("Hello World!");
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




// app.get("/food", async (req, res) => {
//   try {
//     const foods = await Food.findById();
//   res.status(200).json(foods);
//   } catch (error) {
//     console.error('Error fetching food items: ', error);
//     res.status(500).json({err: 'Internal server error'})
//   }
// })

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





// POST REQUESTS

app.post("/food", async (req, res) => {
  const food = await Food.create({
    name: "Ногоотой шөл",
    image: "https://res.cloudinary.com/dqjwd8g6x/image/upload/v1712312694/food%20image/wildricesoup.jpg",
    ingredient: "мөөг, лууван, бууцай, будаа, лаврын навч, кокосын сүү, давс, перец",
    price: 18800,
  });

  res.send(food);
});

//user
// app.post("/user", async (req, res) => {
//   // const password = "Aa12345";
//   const user = await User.create({
//     name: "билгүүндөл",
//     email: "duluubagsh@gmail.com",
//     password: await hashPassword(password),
//     phoneNumber: 98765432
//   });

//   res.send(user);
// });

app.post("/user/login", async (req, res) =>{
  const {email, password} = req.body;
  try {
    const user = await User.findOne({email});
    if (!user) {
      return res.status(404).json({error: 'User not found'})
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if(!passwordMatch) {
      return res.status(401).json({error: 'Invalid password'})
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } 
    );

    return res.status(200).json({message: 'Login successful', token})
  } catch(err) {
    console.error('Error finding user: ', err);
    return res.status(500).json({error: 'Internal server error'})
  }
})




app.post('/category/add', async (req, res) => {
  const { categoryId } = req.params;
  const { name } = req.body;

  try {
      const category = await Category.findById('660bebf2d003489b7ed68c65');
      if (!category) {
          return res.status(404).json({ error: 'Category not found' });
      }
      category.foodId.push('660d3fb1eb6846f68fe86cfc');

      const updatedCategory = await category.save();
      return res.status(200).json(updatedCategory);
  } catch (error) {
      console.error('Error updating category:', error);
      return res.status(500).json({ error: 'Internal server error' });
  }
});



app.get("/category", async (request, response) => {
  try {
    const data = await Category.findById(
      "660bebf2d003489b7ed68c65"
    ).populate({
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







//user
// app.post("/user", async (req, res) => {
//   // const password = "Aa12345";
//   const user = await User.create({
//     name: "билгүүндөл",
//     email: "duluubagsh@gmail.com",
//     password: await hashPassword(password),
//     phoneNumber: 98765432
//   });

//   res.send(user);
// });

app.post("/user/login", async (req, res) =>{
  const {email, password} = req.body;
  try {
    const user = await User.findOne({email});
    if (!user) {
      return res.status(404).json({error: 'User not found'})
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if(!passwordMatch) {
      return res.status(401).json({error: 'Invalid password'})
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } 
    );

    return res.status(200).json({message: 'Login successful', token})
  } catch(err) {
    console.error('Error finding user: ', err);
    return res.status(500).json({error: 'Internal server error'})
  }
})




app.post('/category/add', async (req, res) => {
  const { categoryId } = req.params;
  const { name } = req.body;

  try {
      const category = await Category.findById('660bebf2d003489b7ed68c65');
      if (!category) {
          return res.status(404).json({ error: 'Category not found' });
      }
      category.foodId.push('660d3fb1eb6846f68fe86cfc');

      const updatedCategory = await category.save();
      return res.status(200).json(updatedCategory);
  } catch (error) {
      console.error('Error updating category:', error);
      return res.status(500).json({ error: 'Internal server error' });
  }
});



app.get("/category", async (request, response) => {
  try {
    const data = await Category.findById(
      "660bebf2d003489b7ed68c65"
    ).populate({
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







app.post("/user", async (req, res) => {
  const user = await User.create({
    name: "билгүүндөл",
    email: "duluubagsh@gmail.com",
    password: await hashPassword(),
    phoneNumber: 98765432,
  });

  res.send(user);
});

app.post("/user/login", async (req, res) =>{
  const {email, password} = req.body;
  try {
    const user = await User.findOne({email});
    if (!user) {
      return res.status(404).json({error: 'User not found'})
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if(!passwordMatch) {
      return res.status(401).json({error: 'Invalid password'})
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: '1h' } 
    );

    return res.status(200).json({message: 'Login successful', token})
  } catch(err) {
    console.error('Error finding user: ', err);
    return res.status(500).json({error: 'Internal server error'})
  }
});

app.post("/categories", async (req, res) => {
  const { categoryId } = req.params;
  const { name } = req.body;

  try {
      const category = await Category.findById('660bebf2d003489b7ed68c65');
      if (!category) {
          return res.status(404).json({ error: 'Category not found' });
      }
      category.foodId.push('660d3fb1eb6846f68fe86cfc');

      const updatedCategory = await category.save();
      return res.status(200).json(updatedCategory);
  } catch (error) {
      console.error('Error updating category:', error);
      return res.status(500).json({ error: 'Internal server error' });
  }
});

app.get("/category", async (request, response) => {
  try {
    const data = await Category.findById(
      "660bebf2d003489b7ed68c65"
    ).populate({
      path: "foodId",
      model: "Food",
    });
    console.log(data);
  }
  catch (error) {
    console.error("Error updating category:", error);
    return response.status(500).json({ error: "Internal server error" });
  }
});

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
