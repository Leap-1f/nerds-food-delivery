import { useEffect, useState } from "react";
// send food item.
const [foodName, setFoodName] = useState("");
const [foodDescription, setFoodDescription] = useState("");
const [price, setPrice] = useState("");
const [category, setCategory] = useState("");
async function sendFoodItem() {
  let sendFoodItem = await fetch("http://localhost:8080/createFood", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: foodName,
      img: "Not implemented yet.",
      ingredient: foodDescription,
      price: parseInt(price),
      catId: category,
    }),
  }).then(async (response) => {
    if (response.status === 400) {
      /* add error modal */
    } else {
      /* add success modal */
    }
  });
}
// get food items
const [foods, setFoods] = useState([]);
async function getFood() {
  const getAllFood = await fetch("http://localhost:8080/getAllFood", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
  setFoods(getAllFood);
}
useEffect(() => {
  getFood();
}, []);
// delete food item use with button
async function deleteFood(foodId: string) {
  const getAllFood = await fetch("http://localhost:8080/getAllFood", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: foodId,
    }),
  });
}
//update food item. needs the old category getter and stuff. see category_crud_functions.tsx for more info.
const [foodId, setFoodId] = useState("");
const [oldCat, setOldCat] = useState("");
async function updateFoodItem() {
  let updateFoodItem = await fetch("http://localhost:8080/updateFood", {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: foodId,
      name: foodName,
      img: "Not implemented yet.",
      ingredient: foodDescription,
      price: parseInt(price),
      catId: oldCat,
      newCatId: category,
    }),
  }).then(async (response) => {
    if (response.status === 400) {
      /* add error modal */
    } else {
      /* add success modal */
    }
  });
}
//get food item by id. need external foodId or internal. uses the usestates from createFood
// const [foodName, setFoodName] = useState("");
// const [foodDescription, setFoodDescription] = useState("");
// const [price, setPrice] = useState("");
// const [category, setCategory] = useState("");
async function getFoodById(/* foodId: string */) {
  const getFoodById = await fetch("http://localhost:8080/getFoodById", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: foodId,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      setFoodName(response[0].name);
      setFoodDescription(response[0].name);
      setPrice(response[0].price);
      return response;
    });
}
//get food items within a category.
async function getFoodItemsByCategory() {
  const getFoodItemsByCategory = await fetch(
    "http://localhost:8080/getFoodItemsByCategory",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // id: catId,
      }),
    }
  );
}
