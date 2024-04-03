import React from "react";
import OrderModal from "@/components/Modals/OrderModal";
import { Box, Stack } from "@mui/material";
import { MockData } from "../../mockdata/mockData";
import { useState } from "react";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("");

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
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredMeals = saleMeals.filter((MockData) =>
    selectedCategory ? MockData.category === selectedCategory : true
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
                selectedCategory === el.category ? "#ccc" : "transparent",
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
          flexWrap: "wrap",
        }}
      >
        {filteredMeals.map((el, ) => (
          <Box>{MockData.category}</Box>
        ))}
        <MockData></MockData>
      </Box>
      <Stack direction={"row"} justifyContent={"center"}>
        <OrderModal></OrderModal>
      </Stack>
    </Box>
  );
}
