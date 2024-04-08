import React from "react";
import OrderModal from "@/components/modals/OrderModal";
import { Box, Stack } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

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

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch("http://localhost:8080/food");
        if (!response.ok) {
          throw new Error("Failed to fetch food items on frontend");
        }
        const data = await response.json();
        setFoodItems(data);
      } catch (error) {
        console.error("Error fetching food items:", (error as Error).message);
      }
    };

    fetchFoodItems();
  }, []);

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
          width: "1616px",
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
          width: "1616px",
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
        {filteredData.map((el: FoodItem) => (
          <Box
          key = {el.name}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "20%",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "60%",
              }}
            >
              <img
                src={el.image}
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  maxHeight: "100%",
                  maxWidth: "100%",
                  border: "1px",
                  borderRadius: "10px",
                }}
              />
              <Typography
                border={1}
                borderRadius={5}
                width={60}
                bgcolor="#18BA51"
                color={"white"}
                justifyContent={"center"}
                align="center"
                position={"absolute"}
                top="10%"
                right="5%"
                borderColor={"white"}
              >
                {el.discountedPrice}
              </Typography>
            </Box>
            <Box>
              <Typography
                fontSize={16}
                color={"black"}
                fontWeight={600}
                paddingTop={3}
              >
                {el.name}
              </Typography>
              <CardActions sx={{ gap: 2, fontSize: 16, padding: 0 }}>
                <Typography color="green">{el.price}</Typography>
                <Typography
                  sx={{ textDecoration: "line-through" }}
                  color="text.secondary"
                >
                  {el.dsprice}
                </Typography>
              </CardActions>
            </Box>
          </Box>
        ))}
      </Box>

      <Stack direction={"row"} justifyContent={"center"}>
        <OrderModal></OrderModal>
      </Stack>
    </Box>
  );
}
