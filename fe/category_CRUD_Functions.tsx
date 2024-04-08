import { useState, useEffect } from "react";

//Get Categories.
async function getCategories() {
  const getCategories = await fetch("http://localhost:8080/getCategories", {
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
}
//get category name from id. catId will have to be a objectId. use usestate or bring in from outside.
// const [catId, setCatId] = useState("")
async function getCategoryName(/* catId */) {
  let categoryName = await fetch("http://localhost:8080/getCatName", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify({
    //   id: catId,
    // }),
  })
    .then((response) => response.json())
    .then((response) => {
      //   setCategoryName(response.name);
    });
}
// update category. same stuff as b4.
// const [categoryName, setCategoryName] = useState("")
// const [catId, setCatId] = useState("")
async function sendCategoryInfo(/* catId */) {
  let createCategory = await fetch("http://localhost:8080/createCategory", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      //   id: catId,
      //   name: categoryName,
    }),
  });
}
// get category of food. same shizz as b4,
// const [oldCat, setOldCat] = useState("")
// const [foodId, setFoodId] = useState("")
// const [category, setCategory] = useState("")
async function getFoodCategory(/* foodId */) {
  const getCategories = await fetch("http://localhost:8080/getFoodCategory", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      //    foodId: foodId
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      //    setOldCat(response[0].id);
      //    setCategory(response[0].id);
    });
  return getCategories;
}
// delete category.
async function deleteCategory(/* catId */) {
  const getCategories = await fetch("http://localhost:8080/deleteCategory", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      //    id: catId,
    }),
  });
}
