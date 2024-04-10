import React from "react";
import OrderModal from "../components/modals/OrderModal";
import { Box, Stack } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { FoodCart } from "@/components/ui";

import { useState, useEffect } from "react";

interface FoodItem {
  category: string;
  image: string;
  name: string;
  price: string;
  dsprice: string;
  discountedPrice?: string;
}

export default function Menu() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // useEffect(() => {
  //   const fetchFoodItems = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8080/food");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch food items on frontend");
  //       }
  //       const data = await response.json();
  //       setFoodItems(data);
  //     } catch (error) {
  //       console.error("Error fetching food items:", (error as Error).message);
  //     }
  //   };

  //   fetchFoodItems();
  // }, []);

  const saleMeals = [
    {
      category: "Breakfast",
    },
    {
      category: "Soup",
    },
    {
      category: "MainFood",
    },
    {
      category: "Dessert",
    },
  ];
  const handleCategorySelect = (category: any) => {
    setSelectedCategory(category);
  };

  const filteredData = foodItems.filter(
    (el) => {
      const foodItem = el as FoodItem;
      return (selectedCategory === "" || foodItem.category === selectedCategory) && ('image' in foodItem) && foodItem.image !== undefined;
    }
  );  
  

  return (
    <Box>
      <Box
        sx={{
          maxWidth: "1250px",
          margin: "0px, auto",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {saleMeals.map((el) => (
          <Box
            sx={{
              width: "20%",
              height: "43px",
              border: "1px solid gray",
              borderRadius: "8px",
              borderColor: "#D6D8DB",
              textAlign: "center",
              alignContent: "center",
              cursor: "pointer",
              backgroundColor:
                selectedCategory === el.category ? "#18BA51" : "transparent",
            }}
            onClick={() => handleCategorySelect(el.category)}
          >
            <button
              style={{
                fontSize: "18",
                fontWeight: "500",
                color: "#000000",
              }}
            >
              {el.category}
            </button>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          maxWidth: "1250px",
          margin: "0px, auto",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2%",
          display: "flex",
          justifyContent: "space-between",
          gap: "5px",
          flexWrap: "wrap",
        }}
      >
        <FoodCart></FoodCart>
      </Box>

      <Stack direction={"row"} justifyContent={"center"}>
        <OrderModal></OrderModal>
      </Stack>
    </Box>
  );
}
