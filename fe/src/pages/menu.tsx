import React from "react";
import OrderModal from "@/components/Modals/OrderModal";
import { FoodCart, } from "@/components/ui/index";
import { Box, Stack } from "@mui/material";

export default function Menu() {
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
  const category = "Dessert";
  const filteredMeals = saleMeals.filter((meal) => meal.category === category);
  console.log(filteredMeals);
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
            }}
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
      <Box>
      </Box>
      <Stack direction={"row"} justifyContent={"center"}>
        <OrderModal></OrderModal>
      </Stack>
    </Box>
  );
}
